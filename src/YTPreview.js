import React, { Component } from 'react'
import './YTPreview.css'

class YTPreview extends Component {
	render() {
		const videoId = this.props.videoId
		const sourceUrl = "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1&autoplay=1&controls=0&modestbranding=1&rel=0"
		return (
			<iframe width="480" height="270" src={sourceUrl} frameBorder="0" className="ytpreview-iframe">
			</iframe>
		)
	}
}

export default YTPreview