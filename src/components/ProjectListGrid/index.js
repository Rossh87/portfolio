import React from 'react';

// Get local components
import ProjectListItem from 'components/ProjectListItem';
import ProjectLoader from 'containers/ProjectLoader';
import Divider from 'legos/Divider';


import './styles.scss';

const ProjectsBuilder = ({data}) => {
	return (
		<React.Fragment>
			{data.map((project, i) => (
				<ProjectListItem {...project} key={project.id} isInverted={i % 2 === 0}/>
			))}
		</React.Fragment>
	)
}

const ProjectListGrid = props => {
	return(
		<React.Fragment>
			<Divider id='skills'>Projects</Divider>
			<ProjectLoader>
				<ProjectsBuilder />
			</ProjectLoader>
		</React.Fragment>
	);
}

export default ProjectListGrid;