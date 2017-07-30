import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox'

const SS_BASE_URL = "https://sound-stash.herokuapp.com/"
const SS_BASE_SEARCH_URL = SS_BASE_URL + "search/"

class App extends Component {
  constructor(props) {
    super(props)
  }

  getSearchResults(query) {
    if (!query)
      return false;

    const httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      console.log('Giving up: Cannot create an XMLHTTP instance');
      return false;
    }

    const queryUrl = SS_BASE_SEARCH_URL + query
    httpRequest.open('GET', queryUrl);
    httpRequest.onreadystatechange = function() {
      try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            console.log(JSON.parse(httpRequest.responseText));
          } else {
            console.log('There was a problem with the request : '+httpRequest.status);
          }
        }
      }
      catch( e ) {
        console.log('Caught Exception: ' + e.description);
      }
    }

    httpRequest.send();

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 id="sound">SOUND</h2><h2 id="stash">STASH</h2>
        </div>
        <div className="App-container">
          <SearchBox onChange={this.getSearchResults}/>
        </div>
      </div>
    );
  }
}

export default App;
