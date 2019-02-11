import React from 'react';
import {Link} from 'react-router-dom';
import GraphicSwitch from 'graphicComponents/GraphicSwitch';
import './styles.scss';

class ProjectCard extends React.Component {
	// Tracking hovered state locally allows the component's hover
	// status to be passed as a prop to embedded graphic component. 
	// This allows the ProjectCard component and the graphic component to be 
	// modular (css is not tightly-coupled), and for complete ProjectCards to 
	// be generated programatically by parent component.
	state = {
		isHovered: false,

		// themes are locally defined for now.
		// Opportunity to modularize this to accept external 'theme'
		// objects in the future.
		themes: {
			react: {
				themeName: 'react',
				hoverColor: '#61dafb',
				strokeWidth: 12,
				baseColor: '#848C8E'
			},

			html: {
				themeName: 'html',
				hoverColor: '#DCF763',
				strokeWidth: 18,
				baseColor: '#848C8E'
			},

			js: {
				themeName: 'js',
				hoverColor: 'red',
				strokeWidth: 4,
				baseColor: '#848C8E'
			}
		}
	};

	handleMouseEnter = e => {
		this.setState({
			isHovered: true
		});
	}

	handleMouseLeave = e => {
		this.setState({
			isHovered: false
		});
	}

	// This is one potential limitation of no css-in-js:
	// lots of duplicated css to differentiate one small animation
	// effect.
	getClassNames() {
		const {theme} = this.props;

		switch(theme){
			case('react'):
				return 's-has-react-theme';

			case('html'):
				return 's-has-html-theme';

			case('js'):
				return 's-has-js-theme';
		}
	}

	render() {
		const {title, children, theme} = this.props;
		const graphicTheme = this.state.themes[theme];

		return(
			<div 
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				className={`c-skillCard ${this.getClassNames()}`}
			>
				<Link className='c-skillCard_link' to={`/projects/${theme}`}>
					<GraphicSwitch graphicTheme={graphicTheme} isHovered={this.state.isHovered}/>

					<div className="c-skillCard_text">
						<h1 className="c-skillCard_title">{title}</h1>
						<p className="c-skillCard_content">{children}</p>
					</div>
				</Link>
			</div>
		)
	}
}

export default ProjectCard;