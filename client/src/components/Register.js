import React, { Component } from 'react';

class Register extends Component {
	render() {
		return (
			<div className="container" style={{ border: "1px solid rgba(0,0,0,0.2)", padding: "40px 60px", borderRadius:'4px', width: "800px"}}>
				<div style={{ display: "flex" , justifyContent:'space-between', flexWrap:'wrap'}}>
					<div className="field">
					  <div className="field">
						  <p className="label">First Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Text input" value=""/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">This username is available</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Last Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Text input" value=""/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">This username is available</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Mothers Name</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Text input" value=""/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">This username is available</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Permanent Address</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Text input" value=""/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">This username is available</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">Current Address</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Text input" value=""/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">This username is available</p>
						</div>
					</div>
					
					<div className="field">
					  <div className="field">
						  <p className="label">Phone</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Text input" value=""/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">This username is available</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">DOB</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Text input" value=""/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">This username is available</p>
						</div>
					</div>

					<div className="field">
					  <div className="field">
						  <p className="label">PIN</p>
						  <div className="control has-icons-left has-icons-right">
						    <input className="input is-success" type="text" placeholder="Text input" value=""/>
						    <span className="icon is-small is-left">
						      <i className="fas fa-user"></i>
						    </span>
						    <span className="icon is-small is-right">
						      <i className="fas fa-check"></i>
						    </span>
						  </div>
						  <p className="help is-success">This username is available</p>
						</div>
					</div>
				</div>

				<div className="field">
				  <p className="label">Email</p>
				  <div className="control has-icons-left has-icons-right">
				    <input className="input is-danger" type="email" placeholder="Email input" value=""/>
				    <span className="icon is-small is-left">
				      <i className="fas fa-envelope"></i>
				    </span>
				    <span className="icon is-small is-right">
				      <i className="fas fa-exclamation-triangle"></i>
				    </span>
				  </div>
				  <p className="help is-danger">This email is invalid</p>
				</div>

				<div className="field">
				  <p className="p">Subject</p>
				  <div className="control">
				    <div className="select">
				      <select>
				        <option>Select dropdown</option>
				        <option>With options</option>
				      </select>
				    </div>
				  </div>
				</div>

				<div className="field">
				  <p className="label">Why Karate</p>
				  <div className="control">
				    <textarea className="textarea" placeholder="Please tell us why you want to learn Karate"></textarea>
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
				      <input type="radio" name="question"/>
				      Yes
				    </p>
				    <p className="radio">
				      <input type="radio" name="question"/>
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
