import React from 'react';

// Get local components
import IntroHeading from 'components/IntroHeading';
import ProjectGrid from 'containers/ProjectGrid';
import About from 'components/About';
import ContactForm from 'containers/ContactForm';
import Divider from 'legos/Divider';

const Homepage = props => {
	return(
		<React.Fragment>
			<ProjectGrid />
			<Divider id="about"></Divider>
			<About />
			<Divider id="contact">Collaborate</Divider>
			<ContactForm />
		</React.Fragment>
	)
}

export default Homepage;