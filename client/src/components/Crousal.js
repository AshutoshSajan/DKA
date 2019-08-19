import React from 'react';
import M from 'materialize-css';
import Gallery from './Gallery';

class Crousal extends React.Component {
	state = {
		showGallery: false,
		url: ''
	};
	componentDidMount() {
		var elem = document.querySelector('.carousel');
		var instance = M.Carousel.init(elem, { duration: 200 });
	}

	handleGallery = url => {
		this.setState({ showGallery: true, url });
	};

	closeGallery = () => {
		console.log('fired');
		this.setState({ showGallery: false, url });
	};

	render() {
		return (
			<div className="carousel">
				{this.state.showGallery ? <Gallery url={this.state.url} closeGallery={this.closeGallery} /> : null}
				<a
					onClick={() => this.handleGallery('https://lorempixel.com/250/250/nature/1')}
					className="carousel-item"
					href="#one!"
				>
					<img src="https://lorempixel.com/250/250/nature/1" />
				</a>
				<a
					onClick={() => this.handleGallery('https://lorempixel.com/250/250/nature/2')}
					className="carousel-item"
					href="#two!"
				>
					<img src="https://lorempixel.com/250/250/nature/2" />
				</a>
				<a
					onClick={() => this.handleGallery('https://lorempixel.com/250/250/nature/3')}
					className="carousel-item"
					href="#three!"
				>
					<img src="https://lorempixel.com/250/250/nature/3" />
				</a>
				<a
					onClick={() => this.handleGallery('https://lorempixel.com/250/250/nature/4')}
					className="carousel-item"
					href="#four!"
				>
					<img src="https://lorempixel.com/250/250/nature/4" />
				</a>
				<a
					onClick={() => this.handleGallery('https://lorempixel.com/250/250/nature/5')}
					className="carousel-item"
					href="#five!"
				>
					<img src="https://lorempixel.com/250/250/nature/5" />
				</a>
			</div>
		);
	}
}

export default Crousal;
