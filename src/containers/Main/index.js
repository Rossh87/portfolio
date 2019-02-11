import React from 'react';

// Local components
import IntroHeading from 'components/IntroHeading';
import ProjectGrid from 'containers/ProjectGrid';
import About from 'components/About';
import ContactForm from 'containers/ContactForm';
import Divider from 'legos/Divider';

class Main extends React.Component {

	render() {
		return (
			<React.Fragment>
				<IntroHeading />
				<Divider>Skills</Divider>
				<ProjectGrid />
				<Divider>About</Divider>
				<About />
				<Divider>Collaborate</Divider>
				<ContactForm />
			</React.Fragment>
		)
	}
}

export default Main;