import React from 'react';
import ProjectCard from 'components/ProjectCard';
import Divider from 'legos/Divider';

import './styles.scss';

const ProjectTypeGrid = props => {
	return(
		<React.Fragment>
			<Divider id='skills'>Skills</Divider>
			<div className="c-ProjectTypeGrid">
				<ProjectCard theme='react' title="React">
					Redux, Jest, Enzyme.
				</ProjectCard>

				<ProjectCard theme='js' title="Javascript" isInverted={true}>
					Node, Express, and Mongo, with plenty of vanilla for good measure.
				</ProjectCard>

				<ProjectCard theme='css' title="HTML/CSS">
					Responsive, adaptable layouts with grid, flexbox, and BEM.
				</ProjectCard>
			</div>
		</React.Fragment>
	)
}

export default ProjectTypeGrid;