import React from 'react';
import FlashMessage from 'react-flash-message';

// Get local components
import BaseForm from 'legos/BaseForm';

// Get Ajax handler
import ajaxHandler from 'services/ajaxHandler';

import './styles.scss';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state =  {
			flashMessage:''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	

	async handleSubmit(formState) {
		try {
			await ajaxHandler('post', 'contact', formState);
			this.setState({flashMessage: 'MessageSent!'})
		}

		catch(err) {
			console.log('from catch');
			this.setState({flashMessage: 'Oops!  Something glitched, please check your info and try again'});
		}
	}

	renderFlash() {
		if(this.state.flashMessage) {
			return(
				<FlashMessage duration={15000}>
					<div className="c-contact_flash">{this.state.flashMessage}</div>
				</FlashMessage>
			)
		}
	}

	render() {
		// Property 'fields' on baseform accepts an object describing the desired fields 
		// in the returned form.  All fields must have a name (string) and type (string).  
		// Acceptable types are 
		// currently 'text' and 'textarea';
		return(
			<section className="c-contact">
				<div className="c-contact_form">
					{this.renderFlash()}
					<BaseForm
						handleFormSubmission={this.handleSubmit}
						fields={[
							{name:'name', type: 'input'}, 
							{name:'email', type: 'input'},
							{name:'message', type: 'textarea'}
						]}
					/>
				</div>

				<div className="c-contact_text">
					<p>
						Hiring?  I'm interested!  Hacking?  I'd love to help!  Learning?  Me too (forever)!
						Inspiration is nine-tenths collaboration.  If you have a project, a problem, or even just a 
						story on your mind, it would be my pleasure to listen.  Drop me a line in the form next door,
						or find me on any of the social media below.
					</p>
				</div>
			</section>
			
		);
	}
}

export default ContactForm;