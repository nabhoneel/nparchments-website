import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './contact.scss';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {name: '', email: '', message: '', status: false};
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
  async handleSubmit(event) {
		event.preventDefault();
    const response = await fetch('/.netlify/functions/contactSubmit', {
			method: "post",
			body: JSON.stringify({...this.state})
		});
		
		const reply = await response.json();
		if(reply.status === 'success') {
			this.setState({status: true});
			setTimeout(() => {
				this.setState({name: '', email: '', message: '', status: false});
			}, 4000);
		}
	}
	
	loadAlert() {
		return (<div className="alert alert-success">Thanks for this! I'll get back to you soon!</div>);
	}

	render() {
		console.log(this.state.status);
		return(
			<Layout>
				<SEO title="Contact" />
				<div className="contact-form">
					<div className="heading">Thanks for being friendly :)</div>
					<form className="form-section" onSubmit={this.handleSubmit}>					
						<div style={{
							padding: '1em 2em 2em',
							display: 'flex',
							flexDirection: 'column'
						}}>
							<div className="label">Name</div>
							<input type="text" id="name" className="name" required value={this.state.name} onChange={event => {
								this.setState({name: event.target.value});
							}} />
							<div className="label">Email</div>
							<input type="email" id="email" className="email" required value={this.state.email} onChange={event => {
								this.setState({email: event.target.value});
							}} />
							<div className="label">Message</div>
							<textarea name="message" id="message" cols="30" rows="10" className="message" required value={this.state.message} onChange={event => {
								this.setState({message: event.target.value});
							}} />
							<button className="submit btn btn-outline-primary">Send!</button>
							{ this.state.status === true ? this.loadAlert() : null }							
						</div>				
					</form>
				</div>
			</Layout>
		);		
	}
}

export default Contact;
