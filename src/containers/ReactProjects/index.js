import React from 'react';
// build temp ids for key
import shortid from 'shortid';

// get media
import warbler from 'images/warbler.jpg';

import ProjectSection from 'components/ProjectSection';

import './styles.scss';

class ReactProjects extends React.Component {
	// These objects mimic data from db that may exist at some point in the future,
	// if this site ever needs a backend.
	state = {
		projects: [
			{
				imageSrc: warbler,
				imageAlt: 'Logo of a bird',
				text: 'This site is also a bespoke React application.  Other than bootstrapping with create-react-app, the front end, back end (node/express), styles, and content are custom from the ground on up.  If you don\'t prefer <code>create-react-app</code>, check out some custom webpack options <a href="/projects/javascript">here</a>.  So meta.',
				_id: shortid.generate(),
				repo: 'https://github.com/Rossh87/warbler',
			},
			{
				imageSrc: warbler,
				imageAlt: 'Logo of a bird',
				text: 'A bootcamp final project that got way out of hand.  A social media app built on a React/Redux frontend and a Node/Express/Mongo backend.  Includes a jwt-based rolling auth system combined with Google Auth, a complete test harness, and responsive layouts courtesy of Bootstrap.',
				_id: shortid.generate(),
				repo: 'https://github.com/Rossh87/warbler',
			},
	
			{
				imageSrc: 'https://images.unsplash.com/photo-1542841791-bf92ca449f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				imageAlt: 'some timbalands',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero, soluta nostrum suscipit aliquam, eveniet voluptas, nam quis, blanditiis vitae reiciendis magni natus sequi atque placeat quos sapiente quo mollitia esse quam adipisci quibusdam. Doloribus sed, debitis natus earum rerum error fuga quia, iure facilis veniam exercitationem vel asperiores dolor.',
				_id: shortid.generate(),
				repo: 'https://github.com/Rossh87',
				demoURL: 'https://unsplash.com/photos/kAcE7wQ1S68'
			},
	
			{
				imageSrc: 'https://images.unsplash.com/photo-1542841791-bf92ca449f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				imageAlt: 'some timbalands',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero, soluta nostrum suscipit aliquam, eveniet voluptas, nam quis, blanditiis vitae reiciendis magni natus sequi atque placeat quos sapiente quo mollitia esse quam adipisci quibusdam. Doloribus sed, debitis natus earum rerum error fuga quia, iure facilis veniam exercitationem vel asperiores dolor.',
				_id: shortid.generate(),
				repo: 'https://github.com/Rossh87',
				demoURL: 'https://unsplash.com/photos/kAcE7wQ1S68'
			}
		]
	};

	renderSections() {
		return this.state.projects.map((project, i) => (
			<ProjectSection {...project} key={project._id} isInverted={i % 2 === 0}/>
		))
	}

	render() {
		return(
			<React.Fragment>
				{this.renderSections()}
			</React.Fragment>
		)
	}
}

export default ReactProjects;