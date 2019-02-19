import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// Component to determine which graphic gets rendered inside
// ProjectCard based on the theme passed in props
import GraphicSwitch from 'graphicComponents/GraphicSwitch';

// HOC adds behaviors that track mouse hover @ large screen sizes,
// & also track scroll position @ small sizes or if no mouse is present.
import withHoverBehaviors from 'hocs/withHoverBehaviors';

import './styles.scss';

class ProjectCard extends React.Component {
	state = {
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

			css: {
				themeName: 'css',
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

	// This is one potential limitation of no css-in-js:
	// lots of duplicated css to differentiate one small animation
	// effect.
	getClassNames() {
		const {theme, isHovered} = this.props;

		return isHovered ?
			`c-skillCard s-has-${theme}-theme`
			:
			'c-skillCard';
	}

	render() {
		// the theme prop is passed by ProjectGrid container.  
		// All graphicThemes are currently defined in local state (above).
		const {
			title,
			children,
			theme,
			isHovered,
			HOCRef,
			handleMouseEnter,
			handleMouseLeave,
		} = this.props;

		const graphicTheme = this.state.themes[theme];

		return(
			<div 
				ref={HOCRef}
				className={this.getClassNames()}
				onMouseEnter={()=> handleMouseEnter()}
				onMouseLeave={()=> handleMouseLeave()}
			>
				<Link className='c-skillCard_link' to={`/projects/${theme}`}>
					<GraphicSwitch graphicTheme={graphicTheme} isHovered={isHovered}/>

					<div className="c-skillCard_text">
						<h1 className="c-skillCard_title">{title}</h1>
						<p className="c-skillCard_content">{children}</p>
					</div>
				</Link>
			</div>
		)
	}
}

export default withHoverBehaviors(ProjectCard);


ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
   		PropTypes.arrayOf(PropTypes.node),
    	PropTypes.node
	]).isRequired,
	theme: PropTypes.string.isRequired,
	isHovered: PropTypes.bool.isRequired,
	HOCRef: PropTypes.oneOfType([
		PropTypes.shape({current: PropTypes.instanceOf(Element)}),
		PropTypes.func
	]),
	handleMouseEnter: PropTypes.func.isRequired,
	handleMouseLeave: PropTypes.func.isRequired
}