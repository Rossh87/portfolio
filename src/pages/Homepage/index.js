import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Get local components
import ProjectListGrid from 'components/ProjectListGrid';
import ProjectTypeGrid from 'components/ProjectTypeGrid';
import Footer from 'components/Footer';
import HomeAboutSection from 'components/HomeAboutSection';
import ContactForm from 'containers/ContactForm';
import Navbar from 'containers/Navbar';

import './styles.scss';

const Homepage = props => {
	return(
		<React.Fragment>
			<Navbar />
					
			<div id="about" className="wrapper">
				<HomeAboutSection />

				<Switch>

					<Route exact path='/' component={ProjectTypeGrid} />

					<Route path='/projects/:projectType' component={ProjectListGrid} />

				</Switch>

				<ContactForm />
			</div>

			<Footer />
		</React.Fragment>
	)
}

export default Homepage;