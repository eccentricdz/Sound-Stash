import React, { Component } from 'react'
import './App.css'
import AjaxUtils from './ajax-utils'
import SearchBox from './SearchBox'
import SongsList from './SongsList'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultsArray : [],
      isLoading: false,
      queryChangeTimeout: null,
      query: ""
    }

    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.setIsLoadingState = this.setIsLoadingState.bind(this)
    this.makeAjaxCallForSearchResults = this.makeAjaxCallForSearchResults.bind(this)
  }

  makeAjaxCallForSearchResults() {
    const query = this.state.query
    if (!query) {
      this.setIsLoadingState(false)
      return
    }

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

  handleQueryChange(query) {
    this.setIsLoadingState(true)
    clearTimeout(this.state.queryChangeTimeout)

    let queryChangeTimeout = setTimeout(this.makeAjaxCallForSearchResults, 300)
    this.setState({
      queryChangeTimeout: queryChangeTimeout,
      query: query
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
        <Header />
        <div className="App-container">
          <SearchBox onChange={this.handleQueryChange} isLoading={this.state.isLoading}/>
          <SongsList resultsArray={this.state.resultsArray} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App
