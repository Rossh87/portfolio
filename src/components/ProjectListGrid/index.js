import React from 'react';
import ProjectCard from 'components/ProjectCard';

import './styles.scss';

const ProjectListGrid = props => {
	return(
		<div className="c-projectListGrid">
			<ProjectCard theme='react' title="React">
				Redux, Jest, Enzyme. Unit-tested, mother-approved.
			</ProjectCard>

			<ProjectCard theme='js' title="Javascript" isInverted={true}>
				Redux, Jest, Enzyme. Unit-tested, mother-approved.
			</ProjectCard>

			<ProjectCard theme='css' title="HTML/CSS">
				Responsive layouts with grid, flexbox, and BEM.
			</ProjectCard>
		</div>
	)
}

export default ProjectListGrid;