import React, { Component } from 'react'
import './YTPreview.css'

class YTPreview extends Component {
	render() {
		const videoId = this.props.videoId
		const sourceUrl = "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1&autoplay=1&controls=1&modestbranding=1&rel=0&fs=1&iv_load_policy=3"
		return (
			<div className="song-ytpreview" key={videoId}>
				<iframe width="480" height="270" src={sourceUrl} frameBorder="0" allowFullScreen className="ytpreview-iframe" title={videoId}>
				</iframe>
			</div>
		)
	}
}

export default YTPreview