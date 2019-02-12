import React from 'react';

// Get local components
import ProjectCard from 'components/ProjectCard';

import './styles.scss';

class ProjectGrid extends React.Component {

	render() {

		// Pass desired theme to ProjectCard component.
		
		return(
			<div className="projectGrid">
				<ProjectCard title="react" theme="react" >
					Redux, Animations, Jest.
				</ProjectCard>

				<ProjectCard title="javascript" theme="js">
					Object-oriented and functional patterns.  The foundation of it all...
				</ProjectCard>
				
				<ProjectCard title="HTML/CSS" theme="css">
					Clean, Modular, Responsive.
				</ProjectCard>
			</div>
		)
	}
}

export default ProjectGrid;

// simply pass a theme object to ProjectCard that contains *all* needed info: raw svg, appropriate styles (including animation behavior)
// strength: all info for graphic and animation designed in one place, only need to build 1 rendering component that accepts all
// this data and does the rest
// weakness: styles will be inlined, theme object is abstruse, and is defined as a data object outside the usual React flow.  Pry the most difficult
// to read for outsider.

// create separate, fully independent components that render appropriate svg, e.g. HTMLGraphicComponent, ReactGraphicComponent, etc.
// Animation behavior is totally encapsulated and defined by custom stylesheet
// Strength: Styles compiled to external stylesheet with all the rest.  No need to bring in outside data object, can pass styling basics
// like fill color and stroke width as individual props.  Much more intuitive to read.
// Weaknesses: Re-use is less automated. Styles for each graphic must be passed to component manually

// Hybrid: Build individual graphic components AND create a switch component that renders appropriate graphic based on a single prop.
// Could build in optional style overrides.
// Strength: Perhaps more easily extensible.  Adding case to switch is trivial as graphics get added.  Animation behaviors
// still fully encapsulated with the graphics themselves.
// Building grid is more declarative, 
// where user simply passes the desired theme to switch rather than manually specifiying 
// Weakness: ??