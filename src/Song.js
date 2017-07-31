import React, { Component } from 'react'
import './Song.css'

const SS_BASE_URL = "https://sound-stash.herokuapp.com/"

class Song extends Component {

	prepareInfoObject() {
		const rawVideoInfo = this.props.videoInfo
		let videoInfo = {
			title : rawVideoInfo.snippet.title,
			channelName : rawVideoInfo.snippet.channelTitle,
			thumbnailImageUrl : rawVideoInfo.snippet.thumbnails.medium.url,
			audioDownloadLink: SS_BASE_URL + 'download/audio/' + rawVideoInfo.id.videoId,
			videoDownloadLink: SS_BASE_URL + 'download/video/' + rawVideoInfo.id.videoId,

		}

		return videoInfo
	}

	render() {
		const videoInfo = this.prepareInfoObject()
		const thumbnailStyle = {
			backgroundImage: 'url(' + videoInfo.thumbnailImageUrl + ')'
		}
		return (
			<div className="song-wrapper">
				<div className='song-container'>
					<div className='song-thumbnail' style={thumbnailStyle}></div>
					<div className='song-info-container'>
						<p className="song-title">{videoInfo.title}</p>
						<p className="song-channel-name">{videoInfo.channelName}</p>
					</div>
					<div className='download-icon-container'>
						<i className="fa fa-cloud-download" aria-hidden="true"></i>
					</div>
				</div>
				<div className="song-dload-links">
					<a className="audio-dload-link" href={videoInfo.audioDownloadLink}>audio</a>
					<a className="video-dload-link" href={videoInfo.videoDownloadLink}>video</a>
				</div>
			</div>
		)
	}
}

export default Song