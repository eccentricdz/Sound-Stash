import React, { Component } from 'react'

class Song extends Component {
	render() {
		const videoInfo = this.props.videoInfo
		return (
			<p>{videoInfo.snippet.title}</p>
		)
	}
}

export default Song