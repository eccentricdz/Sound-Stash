import React, { Component } from 'react'
import YTPreview from './YTPreview'
import SSAudio from './SSAudio'
import './Song.css'

const SS_BASE_URL = "https://sound-stash.herokuapp.com/"

class Song extends Component {

	constructor(props) {
		super(props)
		this.state = {
			areDownloadLinksActive: false,
		}

		this.handleDownloadIconMouseEnter = this.handleDownloadIconMouseEnter.bind(this)
		this.handleDownloadIconMouseLeave = this.handleDownloadIconMouseLeave.bind(this)
		this.handleDownloadIconTap = this.handleDownloadIconTap.bind(this)
		this.handleSongOnClick = this.handleSongOnClick.bind(this)
	}

	prepareInfoObject() {
		const rawVideoInfo = this.props.videoInfo
		let videoInfo = {
			id: rawVideoInfo.id.videoId,
			title : rawVideoInfo.snippet.title,
			channelName : rawVideoInfo.snippet.channelTitle,
			thumbnailImageUrl : rawVideoInfo.snippet.thumbnails.medium.url,
			audioPlayerImageUrl: rawVideoInfo.snippet.thumbnails.high.url,
			audioDownloadLink: SS_BASE_URL + 'download/audio/' + rawVideoInfo.id.videoId,
			videoDownloadLink: SS_BASE_URL + 'download/video/' + rawVideoInfo.id.videoId,

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

	handleSongOnClick() {
		this.props.handleOnClick(this.props.videoInfo.id.videoId)
	}

	handleDownloadIconTap(e) {
		e.stopPropagation()
		var isDownloadLinkActive = this.state.areDownloadLinksActive
		this.setState({
			areDownloadLinksActive: !isDownloadLinkActive
		})
	}

	handleDownloadIconClick(e) {
		e.stopPropagation()
	}

	render() {
		const videoInfo = this.prepareInfoObject()
		const videoId = videoInfo.id
		const thumbnailStyle = {
			backgroundImage: 'url(' + videoInfo.thumbnailImageUrl + ')'
		}
		const containerClassName = 'song-container' + (this.state.areDownloadLinksActive ? ' dload-link-active' : '') + (this.props.isPreviewActive ? ' yt-preview-active' : '')
		const wrapperClassName = 'song-wrapper' + (this.props.isPreviewActive ? ' yt-preview-active-song-wrapper' : '')
		let preview = ""
		if (this.props.isPreviewActive) {
			if (this.props.previewType === "audio")
				preview = <SSAudio videoId={videoId} imageUrl={videoInfo.audioPlayerImageUrl}/>
			else if (this.props.previewType === "video")
				preview = <YTPreview videoId={videoId} />
		}
		return (
			<div className={wrapperClassName} id={videoId} key={videoId}>
				{preview}
				<div className="song-dload-links" >
					<a className="audio-dload-link" href={videoInfo.audioDownloadLink} download={videoInfo.title + ".mp3"}>audio</a>
					<a className="video-dload-link" href={videoInfo.videoDownloadLink} download={videoInfo.title + ".mp4"}>video</a>
				</div>
				<div className={containerClassName} onClick={this.handleSongOnClick}>
					<div className='song-thumbnail' style={thumbnailStyle}></div>
					<div className='song-info-container'>
						<p className="song-title">{videoInfo.title}</p>
						<p className="song-channel-name">{videoInfo.channelName}</p>
					</div>
					<div className='download-icon-container' onMouseEnter={this.handleDownloadIconMouseEnter} onMouseLeave={this.handleDownloadIconMouseLeave} onClick={this.handleDownloadIconClick} onTouchEnd={this.handleDownloadIconTap}>
						<i className="fa fa-cloud-download" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default Song