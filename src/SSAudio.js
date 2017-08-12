import React, { Component } from 'react'
import './SSAudio.css'

class SSAudio extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentPlaybackState: 'waiting', // waiting || playing || paused
			totalDuration: 0,
			currentPlaybackTime: 0,
			canPlay: false
		}

		this.iconTypeMap = {
			waiting: 'fa-circle-o-notch fa-spin',
			playing: 'fa-pause',
			paused: 'fa-play'
		}

		this.handleImageContainerClick = this.handleImageContainerClick.bind(this)
	}

	componentDidMount() {
		this.initlializeAudioEvents()
	}

	initlializeAudioEvents() {
		const ssAudioElement = document.getElementById('ssaudio')
		ssAudioElement.play()

		ssAudioElement.addEventListener('canplay', () => {
			this.setState({
				canplay: true,
				currentPlaybackState: 'playing'
			})
			ssAudioElement.play()
		})

		ssAudioElement.addEventListener('playing', () => {
			this.setState({
				currentPlaybackState: 'playing'
			})
		})
	}

	handleImageContainerClick() {
		const ssAudioElement = document.getElementById('ssaudio')
		if (this.state.currentPlaybackState === 'playing') {
			ssAudioElement.pause()
			this.setState({
				currentPlaybackState: 'paused'
			})
		}
		else if (this.state.currentPlaybackState === 'paused') {
			ssAudioElement.play()
			this.setState({
				currentPlaybackState: 'playing'
			})
		}
	}


	render() {
		const imageContainerStyle = {
			backgroundImage: 'url(' + this.props.imageUrl + ')'
		}
		const src = "https://sound-stash.herokuapp.com/stream/video/" + this.props.videoId
		const iconClass = this.iconTypeMap[this.state.currentPlaybackState] + ' fa fw fa-2x'
		return (
			<div id="ssaudio-container">
				<div id="ssaudio-image-container" style={imageContainerStyle} onClick={this.handleImageContainerClick}>
					<i className={iconClass}></i>
				</div>
				<audio id="ssaudio">
					<source src={src}/>
				</audio>
			</div>
		)
	}
}

export default SSAudio