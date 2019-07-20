import React, { Component } from 'react';

export class Contact extends Component {
	render() {
		return (
			<form>
				<a href="#"><span class="cancel-btn"></span></a>
				
				<fieldset>
					<legend>contact</legend>
						<div class="top-input-row">
							<div class="input-container">
								<p for="name">name</p>
								<input class="name" type="text"/>
							</div>
							<div class="input-container">
								<p for="email">email</p>
								<input class="email" type="email" placeholder=""/>
							</div>
						</div>
					<div class="msg-container">
						<p for="textarea">message</p>
						<textarea name="message-box" id="" cols="50" rows="10" placeholder=""></textarea>
					</div>
					<button class="btn" type="submit">send message</button>
				</fieldset>

				<nav class="social-links">
					<ul>
						<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
						<li><a href="#"><i class="fab fa-twitter"></i></a></li>
						<li><a href="#"><i class="fab fa-instagram"></i></a></li>
						<li><a href="#"></a><i class="fab fa-github"></i></li>
						<li><a href="#"><i class="fab fa-medium"></i></a></li>
					</ul>
				</nav>	
			</form>	
		);
	}
}

export default Contact;
