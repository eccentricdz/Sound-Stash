import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
	constructor(props) {
		super(props)
		this.handleChange.bind(this)
	}
	handleChange(event) {
		const query = event.target.value
		this.props.onChange(query)
	}
	render() {
		return (
			<div className="search-box-container">
				<form id="search-box-form">
					<input type="text" id="search-box" name="search-box" onChange={this.handleChange.bind(this)}/>
					<i className="fa fa-search" aria-hidden="true"></i>
				</form>
			</div>
		)
	}
}

export default SearchBox