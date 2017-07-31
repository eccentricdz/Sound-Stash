import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: ''
		}
	}
	handleChange(event) {
		const query = event.target.value
		this.setState({
			value: query
		})
		this.props.onChange(query)
	}
	render() {
		const className = this.state.value === '' ? '' : 'has-value'
		return (
			<div className="search-box-container">
				<form id="search-box-form">
					<input type="text" id="search-box" className={className} name="search-box" onChange={this.handleChange.bind(this)}/>
					<i className="fa fa-search" aria-hidden="true"></i>
				</form>
			</div>
		)
	}
}

export default SearchBox