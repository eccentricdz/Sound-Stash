import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
	render() {
		return (
			<div className="search-box-container">
				<input type="text" id="search-box" name="search-box" />
				<i className="fa fa-search" aria-hidden="true"></i>
			</div>
		)
	}
}

export default SearchBox