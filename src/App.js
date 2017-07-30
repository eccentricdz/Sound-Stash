import React, { Component } from 'react'
import './App.css'
import AjaxUtils from './ajax-utils'
import SearchBox from './SearchBox'
import SongsList from './SongsList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultsArray : []
    }

    this.handleQueryChange.bind(this)
  }

  handleQueryChange(query) {
    AjaxUtils.getSearchResults(query, function(searchResults) {
      if (searchResults) {
        this.setState({
          resultsArray: searchResults
        })
      }
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 id="sound">SOUND</h2><h2 id="stash">STASH</h2>
        </div>
        <div className="App-container">
          <SearchBox onChange={this.handleQueryChange.bind(this)}/>
          <SongsList resultsArray={this.state.resultsArray}/>
        </div>
      </div>
    );
  }
}

export default App
