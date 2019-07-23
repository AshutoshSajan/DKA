import React, { Component } from 'react';

export class Crousal extends Component {
	
	state = {}

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/org/images')
		.then(res => res.json())
		.then(images => {
			console.log(images);
			this.setState({ images })
		})	
	}

	render() {
		return (
			<div className="crousal">
				{
					images ? images.map(image => {
						<div>
							<img src={image} alt={image} />
						</div>
					})
					: null
				}
			</div>
		);
	}
}
