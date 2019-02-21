import React from 'react';

// Get services
import ajaxHandler from 'services/ajaxHandler';

// Get local components
import ProjectListItem from 'components/ProjectListItem';
import LoadingGraphic from 'graphicComponents/LoadingGraphic';

import './styles.scss';

class ProjectListGrid extends React.Component {
	state = {
		projects: []
	};

	async componentDidMount() {
		// Get info from React Router to build correct API
		const projectType = this.props.match.params.projectType;

		// Ajax handler hardcoded to hit API route, only need final path
		// extension for now
		try {
			const projectsArray = await ajaxHandler('get', `projects/${projectType}`);
			this.setState({projects: [...projectsArray]});
		}

		catch(err) {
			console.error(err);
		}
	}

	renderSections() {
		return this.state.projects.length ?
			this.state.projects.map((project, i) => (
				<ProjectListItem {...project} key={project.id} isInverted={i % 2 === 0}/>
			))
			:
			<LoadingGraphic />
	}

	render() {
		return(
			<section className="c-listGrid">
				{this.renderSections()}
			</section>
		)
	}
}

export default ProjectListGrid;