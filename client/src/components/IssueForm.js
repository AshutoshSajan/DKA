import React, { Component } from 'react';

class IssueForm extends Component {

	state = {}

	// email validation function
	validateEmail = (email) => {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
		return this.isEmpty(email) || re.test(email);
	}

	// handleChange function for controlled input
	handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name,value, "inside handleChange issue");
		this.setState({ [name]: value });
	}

	handleSubmit = () => {
		e.preventDefault();
		const {
			email,
			severity,
			priority,
			reproducibility,
			summary,
			description
		} = this.state;

		if(email && this.validateEmail(email) && severity && priority, summary&& description){
			console.log(this.state, "inside handleSubmit");
			fetch(`http://localhost:3000/api/v1/issues/${this.props.user._id}`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					'Authorization': localStorage.getItem("jwt")
				},
				body: JSON.stringify(this.state)
			})
			.then(res => res.json())
			.then(data => {
				console.log(data, "issue report data");
			})
		}
	}

	render() {
		return (
			<div>
			<form
				style={{
					margin: "1.2rem auto",
					boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					width: "30vw",
					padding: "1.2rem" 
				}}
				
				onSubmit={this.handleSubmit}
				>
				
				<p style=
					{{
						paddingBottom: "1.2rem",
						fontSize: "1.5rem"
					}}
					>
					Report An Issue
				</p>
				
				<div>
					<p style=
						{{
							padding: "1rem 0 0.5rem 0",
							fontWeight:"bold"
						}}
						>
						Your email
					</p>
					<input
						type="email"
						id="data_2"
						name="email"
						style={{
							width: "28rem"
						}}
						onChange={this.handleChange}
						className="form-control"
						required
						/>
				</div>
				<div>
					<p style=
						{{
							padding: "1rem 0 0.5rem 0",
							fontWeight:"bold"
						}}
						>
						Severity
					</p>
					<select
						id="data_3"
						name="severity"
						style={{
							width : "28rem"
						}}
						required
						onChange={this.handleChange}
						className="form-control">
						<option value="">Select Severity</option>
						<option value="critical">Critical</option>
						<option value="major">Major</option>
						<option value="moderate">Moderate</option>
						<option value="minor">Minor</option>
						<option value="cosmetic">Cosmetic</option>
					</select>
				</div>
				<div>
					<p style=
						{{
							padding: "1rem 0 0.5rem 0",
							fontWeight:"bold"
						}}
						>
						Priority
					</p>
					<select
						id="data_4"
						name="priority"
						style={{
							width : "28rem"
						}}
						required
						onChange={this.handleChange}
						className="form-control">
						<option value="">Select Priority</option>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
				</div>
				<div>
					<p style=
						{{
							padding: "1rem 0 0.5rem 0",
							fontWeight:"bold"
						}}
						> 
						Summary
					</p>
					<input
						type="text"
						id="data_6"
						name="summary"
						style={{
							width : "28rem",
							border: "1px solid #ced4da"
						}}
						required
						onChange={this.handleChange}
						className="form-control"
						/>
				</div>
				<div>
					<p style=
						{{
							padding: "1rem 0 0.5rem 0",
							fontWeight:"bold"
						}}
						>
						Description
					</p>
					<textarea
						id="data_7"
						name="description" 
						style={{
							width : "28rem"
						}}
						required
						onChange={this.handleChange}
						rows="6"
						className="form-control">
					</textarea>
				</div>
				<div>
					<input
						style={{
							width:"auto",
							marginTop: "0.5rem",
							padding:'0 1rem'
						}}
						name="skip_Submit"
						value="Submit"
						type="submit"
						/>
				</div>

			</form>
			</div>
		);
	}
}

export default IssueForm;
