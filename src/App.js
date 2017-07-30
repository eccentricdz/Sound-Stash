import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 id="sound">SOUND</h2><h2 id="stash">STASH</h2>
        </div>
        <div className="App-container">
          <SearchBox />
        </div>
      </div>
    );
  }
}

export default App;
