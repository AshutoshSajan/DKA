import React, { Component } from 'react';

class Register extends Component {

	state = {
		user: {},
		error: {},
		terms: false
	}

	handleChange = (e) => {
		console.log(e.target.value, "handleChange fired");
		const { name , value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="container" style={{ border: "1px solid rgba(0,0,0,0.2)", padding: "2.5rem 4rem", borderRadius:'4px', width: "50%", margin:"0 auto"}}>
				<div style={{display:'flex', alignItems:'center', flexWrap:'wrap', paddingBottom: '2rem'}}>
					<img style={{ marginRight:'20px'}}src="/dka.jpeg" alt="logo" height="50" width="50"/>
					<p>Wellcome to Dhauladhar Karate Acedemy plese fill up the form to join us</p>
				</div>
				<div style={{ display: "flex" , justifyContent:'space-between', flexWrap:'wrap'}}>
					<div className="field">
					  <div className="field">
						  <p className="label">First Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="First Name" name="firstName" value={ this.state.firstName } onChange={this.handleChange} required />
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.username}</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Last Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Last Name" name="lastName" value={ this.state.lastName } onChange={this.handleChange} />
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.lastName}</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Mothers Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Mothers Name" name="mothersName" value={ this.state.mothersName } onChange={this.handleChange}/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.mothersName}</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Permanent Address</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="VPO-Dist-state" name="address" value={ this.state.address } onChange={this.handleChange} required />
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.address}</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Current Address</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="VPO-Dist-state" name="currentAddress" value={ this.state.currentAddress } onChange={this.handleChange} required />
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.currentAddress}</p>
						</div>
					</div>
					
					<div className="field">
					  <div className="field">
						  <p className="label">Phone</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Mobile number" name="phone" value={ this.state.phone } onChange={this.handleChange} required />
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.phone}</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">DOB</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="date" placeholder="DOB" name="dob" value={ this.state.dob } onChange={this.handleChange} required />
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.dob}</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">PIN</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="number" placeholder="PIN/zip code" name="pin" value={ this.state.pin } onChange={this.handleChange} required />
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">{this.state.error.pin}</p>
						</div>
					</div>
				</div>

				<div className="field">
				  <p className="label">Email</p>
				  <div className="control has-icons-left has-icons-right">
				    <input className="input is-danger" type="email" placeholder="example@gmail.com" name="email" value={ this.state.email } onChange={this.handleChange} required/>
				    <span className="icon is-small is-left">
				      <i className="fas fa-envelope"></i>
				    </span>
				    <span className="icon is-small is-right">
				      <i className="fas fa-exclamation-triangle"></i>
				    </span>
				  </div>
				  <p className="help is-danger">{this.state.error.email}</p>
				</div>

				<div style={{display:"flex" }}>
					<div className="field">
					  <p className="p">Weight</p>
					  <div className="control">
					    <div className="select" style={{marginRight:'20px'}}>
					      <select name="weight" onChange={this.handleChange}>
					        <option>30-35</option>
					        <option>35-40</option>
					        <option>40-45</option>
					        <option>45-50</option>
					        <option>50-55</option>
					        <option>55-60</option>
					        <option>60-65</option>
					        <option>65-70</option>
					        <option>70-75</option>
					        <option>75-80</option>
					      </select>
					    </div>
					  </div>
					</div>
				

					<div className="field">
					  <p className="p">What you do ?</p>
					  <div className="control">
					    <div className="select">
					      <select name="job" onChange={this.handleChange}>
					        <option>Student</option>
					        <option>Buisnessman</option>
					        <option>Govt. employe</option>
					        <option>Teacher</option>
					      </select>
					    </div>
					  </div>
					</div>
				</div>

				<div className="field">
				  <p className="label">Why Karate</p>
				  <div className="control">
				    <textarea className="textarea" placeholder="Please tell us why you want to learn Karate ?"></textarea>
				  </div>
				</div>

				<div className="field">
				  <div className="control">
				    <p className="checkbox">
				      <input type="checkbox"/>
				      I agree to the <a href="#">terms and conditions</a>
				    </p>
				  </div>
				</div>

				<div className="field">
				  <div className="control">
				    <p className="radio">
				      <input type="radio" name="terms" value={this.state.terms} onChange={this.handleChange} />
				      Yes
				    </p>
				    <p className="radio">
				      <input type="radio" name="terms" value={this.state.terms} onChange={this.handleChange} />
				      No
				    </p>
				  </div>
				</div>

				<div className="field is-grouped">
				  <div className="control">
				    <button className="button is-link">Submit</button>
				  </div>
				  <div className="control">
				    <button className="button is-text">Cancel</button>
				  </div>
				</div>
			</div>
		);
	}
}

export default Register;
