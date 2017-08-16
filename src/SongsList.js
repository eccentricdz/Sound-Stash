import React, { Component } from 'react'
import Song from './Song'
//import YTPreview from './YTPreview'
import "./SongsList.css"

class SongsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isPreviewActive: false,
			previewId: null,
			previewType: null
		}
		this.handleSongOnClick = this.handleSongOnClick.bind(this)
	}

	handleSongOnClick(videoId, previewType) {
		this.setState({
			isPreviewActive: true,
			previewId: videoId,
			previewType: previewType
		})
	}

	render() {
		const resultsArray = this.props.resultsArray
		const songComponentList = resultsArray.map((videoResultObject) => 
			<Song videoInfo={videoResultObject} key={videoResultObject.id.videoId} handleOnClick={this.handleSongOnClick} isPreviewActive={this.state.previewId === videoResultObject.id.videoId} previewType={this.state.previewType}/>
		)
		return (
			<div id="song-list-wrapper" className={this.state.isPreviewActive ? "yt-preview-active-wrapper" : ""}>
				<ul id="songs-list">{songComponentList}</ul>
			</div>
		)
	}
}

export default SongsList