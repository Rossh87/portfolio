import React from 'react';

// Get local components

import ContactForm from 'containers/ContactForm';
import Divider from 'legos/Divider';
import ProjectListGrid from 'components/ProjectListGrid';
import HomeAboutSection from 'components/HomeAboutSection';

const Homepage = props => {
	return(
		<React.Fragment>
			<HomeAboutSection />
			<Divider id='skills'>Skills</Divider>
			<ProjectListGrid />
			<Divider id='contact'>Contact</Divider>
			<ContactForm />
		</React.Fragment>
	)
}

export default Homepage;