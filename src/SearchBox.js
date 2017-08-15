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
		this.handleClearIconClick = this.handleClearIconClick.bind(this)
	}

	handleFormSubmit(event) {
		event.preventDefault()
	}

	handleChange(event) {
		const query = event.target.value
		this.setState({
			value: query
		})
		this.props.onChange(query)
	}

	handleClearIconClick() {
		this.setState({
			value: ''
		})
		document.getElementById("search-box").focus();
	}


	render() {
		const inputClassName = this.state.value === '' ? '' : 'has-value'
		const clearIconElement = this.state.value === '' ? '' : <i className="fa fw fa-close" id="search-box-clear" onClick={this.handleClearIconClick}></i>
		const iconClassName = "fa fw " + (this.props.isLoading ? "fa-circle-o-notch fa-spin" : "fa-search")

		return (
			<div className="search-box-container" onSubmit={this.handleFormSubmit}>
				<form id="search-box-form" autoComplete="off">
					<input type="text" id="search-box" value={this.state.value} className={inputClassName} name="search-box" onChange={this.handleChange} autoComplete="off"/>
					<i className={iconClassName} id="search-box-icon" aria-hidden="true"></i>
					{clearIconElement}
				</form>
			</div>
		)
	}
}

export default SearchBox