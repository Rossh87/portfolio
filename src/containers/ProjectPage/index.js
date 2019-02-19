import React from 'react';

// Get services
import ajaxHandler from 'services/ajaxHandler';

// Get local components
import ProjectSection from 'components/ProjectSection';
import LoadingGraphic from 'graphicComponents/LoadingGraphic';

import './styles.scss';

class ProjectPage extends React.Component {
	state = {
		projects: []
	};

	async componentDidMount() {
		// Get info from React Router to build correct API endpoint for
		// data of the desired type
		const projectType = this.props.match.params.projectType;

		// Ajax handler hardcoded to hit API route, only need final path
		// extension for now
		const projectsArray = await ajaxHandler('get', `projects/${projectType}`);

		this.setState({projects: [...projectsArray]});
	}

	renderSections() {
		return this.state.projects.length ?
			this.state.projects.map((project, i) => (
				<ProjectSection {...project} key={project.id} isInverted={i % 2 === 0}/>
			))
			:
			<LoadingGraphic />
	}

	render() {
		return(
			<React.Fragment>
				{this.renderSections()}
			</React.Fragment>
		)
	}
}

export default ProjectPage;