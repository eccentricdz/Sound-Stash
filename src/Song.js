import React, { Component } from 'react'
import './Song.css'

const SS_BASE_URL = "https://sound-stash.herokuapp.com/"

class Song extends Component {

	constructor(props) {
		super(props)
		this.state = {
			areDownloadLinksActive: false
		}

		this.handleDownloadIconMouseEnter = this.handleDownloadIconMouseEnter.bind(this)
		this.handleDownloadIconMouseLeave = this.handleDownloadIconMouseLeave.bind(this)
		this.handleDownloadIconTap = this.handleDownloadIconTap.bind(this)
	}

	prepareInfoObject() {
		const rawVideoInfo = this.props.videoInfo
		let videoInfo = {
			id: rawVideoInfo.id.videoId,
			title : rawVideoInfo.snippet.title,
			channelName : rawVideoInfo.snippet.channelTitle,
			thumbnailImageUrl : rawVideoInfo.snippet.thumbnails.medium.url,
			audioDownloadLink: SS_BASE_URL + 'stream/audio/' + rawVideoInfo.id.videoId,
			videoDownloadLink: SS_BASE_URL + 'stream/video/' + rawVideoInfo.id.videoId,

		}

		return videoInfo
	}

	handleDownloadIconMouseEnter() {
		this.setState({
			areDownloadLinksActive: true
		})
	}

	handleDownloadIconMouseLeave() {
		this.setState({
			areDownloadLinksActive: false
		})
	}

	handleDownloadIconTap(e) {
		//e.preventDefault()
		var isDownloadLinkActive = this.state.areDownloadLinksActive
		this.setState({
			areDownloadLinksActive: !isDownloadLinkActive
		})
	}

	render() {
		const videoInfo = this.prepareInfoObject()
		const key = videoInfo.id
		const thumbnailStyle = {
			backgroundImage: 'url(' + videoInfo.thumbnailImageUrl + ')'
		}
		const containerClassName = 'song-container' + (this.state.areDownloadLinksActive ? ' dload-link-active' : '')
		return (
			<div className="song-wrapper" key={key}>
				<div className="song-dload-links" >
					<a className="audio-dload-link" href={videoInfo.audioDownloadLink} download={videoInfo.title + ".mp3"}>audio</a>
					<a className="video-dload-link" href={videoInfo.videoDownloadLink} download={videoInfo.title + ".mp4"}>video</a>
				</div>
				<div className={containerClassName}>
					<div className='song-thumbnail' style={thumbnailStyle}></div>
					<div className='song-info-container'>
						<p className="song-title">{videoInfo.title}</p>
						<p className="song-channel-name">{videoInfo.channelName}</p>
					</div>
					<div className='download-icon-container' onMouseEnter={this.handleDownloadIconMouseEnter} onMouseLeave={this.handleDownloadIconMouseLeave} onTouchEnd={this.handleDownloadIconTap}>
						<i className="fa fa-cloud-download" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default Song