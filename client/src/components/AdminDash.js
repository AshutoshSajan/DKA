import React, { Component } from 'react';

export class AdminDash extends Component {
	
	state = {}

	componentDidMount() {
	
	}

	handleSubmit = (e) => {

	}

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						name=""
						value={this.state.images}
						onChange={this.handleChange}
						/>
					<input
						type="text"
						name=""
						value={this.state.images}
						onChange={this.handleChange}
						/>
						<input
						type="text"
						name=""
						value={this.state.images}
						onChange={this.handleChange}
						/>
						<input
						type="text"
						name=""
						value={this.state.images}
						onChange={this.handleChange}
						/>
						<input
						type="text"
						name=""
						value={this.state.images}
						onChange={this.handleChange}
						/>

				</form>
			</div>
		);
	}
}
