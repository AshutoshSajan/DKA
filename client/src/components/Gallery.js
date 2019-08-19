import React, { Component } from 'react';

export class Gallery extends Component {
	render() {
		return (
			<div
				style={{
					position: 'absolute',
					width: '90%',
					height: '70vh',
					top: '70%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex: '20'
				}}
			>
				<p onClick={this.props.closeGallery}>X</p>
				<img
					src={this.props.url}
					alt="image"
					style={{
						height: '100%',
						width: '100%'
					}}
				/>
			</div>
		);
	}
}

export default Gallery;
