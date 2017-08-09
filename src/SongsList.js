import React, { Component } from 'react'
import Song from './Song'
//import YTPreview from './YTPreview'
import "./SongsList.css"

class SongsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isVideoPreviewActive: false,
			videoPreviewId: null
		}
		this.handleSongOnClick = this.handleSongOnClick.bind(this)
	}

	handleSongOnClick(videoId) {
		this.setState({
			isVideoPreviewActive: true,
			videoPreviewId: videoId
		})
	}

	render() {
		const resultsArray = this.props.resultsArray
		const songComponentList = resultsArray.map((videoResultObject) => 
			<Song videoInfo={videoResultObject} key={videoResultObject.id.videoId} handleOnClick={this.handleSongOnClick} isPreviewActive={this.state.videoPreviewId === videoResultObject.id.videoId}/>
		)
		return (
			<div id="song-list-wrapper" className={this.state.isVideoPreviewActive ? "yt-preview-active-wrapper" : ""}>
				<ul id="songs-list">{songComponentList}</ul>
			</div>
		)
	}
}

export default SongsList