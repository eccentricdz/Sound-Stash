import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="App-Footer">
                <p id="footer-text">A fun little project!</p>
                <ul id="social-media-list">
                    <li className="social-media-link">
                        <a href="https://github.com/eccentricdz"><i className="fa fa-github"/></a>
                    </li>
                    <li className="social-media-link">
                        <a href="https://dribbble.com/eccentricdz"><i className="fa fa-dribbble"/></a>
                    </li>
                    <li className="social-media-link">
                        <a href="https://www.behance.net/eccentricdz"><i className="fa fa-behance"/></a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer