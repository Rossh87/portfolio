import React from 'react';

import BaseForm from 'legos/BaseForm';

import './styles.scss';

class ContactForm extends React.Component {

	handleSubmit(formState) {
		console.log(formState);
	}

	render() {
		return(
			<BaseForm
				handleFormSubmission={this.handleSubmit}
				fields={['name', 'email', 'message']}
			/>
		);
	}
}

export default ContactForm;