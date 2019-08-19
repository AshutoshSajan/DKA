import React, { Component } from 'react';

import Pictures from './Pictures';
import Crousal from './Crousal';

class Home extends Component {
	render() {
		return (
			<div>
				<Crousal />
				<Pictures />
			</div>
		);
	}
}

export default Home;
