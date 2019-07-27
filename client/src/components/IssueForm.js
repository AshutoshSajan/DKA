import React, { Component } from 'react';

class IssueForm extends Component {

	state = {
		issue: {}
	}

	// email validation function
	validateEmail = (email) => {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}

	// handleChange function for controlled input
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			issue: {
				...this.state.issue,
				[name]: value
			}
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const {
			email,
			severity,
			priority,
			summary,
			description
		} = this.state.issue;

		if(email && this.validateEmail(email) && severity && priority, summary&& description){
			fetch('http://localhost:3000/api/v1/issues', {
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
				if(data.success){
					this.setState({ issue: {}, massage: data.massage });
				} else {
					this.setState({ issue: {}, error: data.error });
				}
			})
		} else {
			console.log("state is empty");
		}
	}

	render() {
		return (
			<div>
			<form
				style={{
					margin: "1.2rem auto",
					boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
				<p style=
					{{
						paddingBottom: "1.2rem",
						color: "red"
					}}
					>
					{ this.state.error || this.state.massage || "" }
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
							width: "90%"
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
							width : "90%"
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
							width : "90%"
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
							width : "90%",
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
							width : "90%"
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
