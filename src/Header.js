import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <h1>
                    <img src="logo.png" id="app-logo" alt="Sound Stash Logo"/>
                </h1>
            </div>
        )
    }
}

export default Header