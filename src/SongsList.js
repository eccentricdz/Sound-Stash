import React, { Component } from 'react'
import Song from './Song'

class SongsList extends Component {

	render() {
		const resultsArray = this.props.resultsArray
		const songComponentList = resultsArray.map((videoResultObject) => 
			<Song videoInfo={videoResultObject} key={videoResultObject.id.videoId} />
		)
		return (
			<ul id="songs-list">{songComponentList}</ul>
		)
	}
}

export default SongsList