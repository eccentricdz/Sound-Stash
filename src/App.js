import React, { Component } from 'react'
import './App.css'
import AjaxUtils from './ajax-utils'
import SearchBox from './SearchBox'
import SongsList from './SongsList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultsArray : [],
      isLoading: false
    }

    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.setIsLoadingState = this.setIsLoadingState.bind(this)
  }

  handleQueryChange(query) {
    this.setIsLoadingState(true)
    AjaxUtils.getSearchResults(query, function(searchResults) {
      if (searchResults) {
        this.setState({
          resultsArray: searchResults
        })
      }
      this.setIsLoadingState(false)
    }.bind(this), (e) => {
      this.setIsLoadingState(false)
      console.log(e.toString())
    })
  }

  setIsLoadingState(value) {
    this.setState({
      isLoading: value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 id="sound">SOUND</h2><h2 id="stash">STASH</h2>
        </div>
        <div className="App-container">
          <SearchBox onChange={this.handleQueryChange} isLoading={this.state.isLoading}/>
          <SongsList resultsArray={this.state.resultsArray} />
        </div>
      </div>
    );
  }
}

export default App
