import React, { Component } from 'react';

class AdminDash extends Component {
	
	state = {}

	componentDidMount() {
	
	}

	handleSubmit = (e) => {

	}

	render() {
		return (
			<div>
				<form className="admin-form">
					<input
					className="input is-success"
						type="text"
						name=""
						value={this.state.images}
						onChange={this.handleChange}
					/>
					<input
					className="input is-success"
						type="text"
						name=""
						value={this.state.images}
						onChange={this.handleChange}
					/>
					<input
					className="input is-success"
					type="text"
					name=""
					value={this.state.images}
					onChange={this.handleChange}
					/>
					<input
					className="input is-success"
					type="text"
					name=""
					value={this.state.images}
					onChange={this.handleChange}
					/>
					<input
					className="input is-success"
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

export default AdminDash;