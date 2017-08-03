import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleFormSubmit(event) {
		event.preventDefault()
	}

	handleChange(event) {
		const query = event.target.value
		this.setState({
			value: query
		})
		if (query) {
			this.props.onChange(query)
		}
	}
	render() {
		const inputClassName = this.state.value === '' ? '' : 'has-value'
		const iconClassName = "fa fw " + (this.props.isLoading ? "fa-circle-o-notch fa-spin" : "fa-search")
		return (
			<div className="search-box-container" onSubmit={this.handleFormSubmit}>
				<form id="search-box-form" autoComplete="off">
					<input type="text" id="search-box" className={inputClassName} name="search-box" onChange={this.handleChange} autoComplete="off"/>
					<i className={iconClassName} aria-hidden="true"></i>
				</form>
			</div>
		)
	}
}

export default SearchBox