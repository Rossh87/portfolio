import React from 'react';
import {ReactComponent as JsSVG} from 'images/VectrJS.svg';
import PropTypes from 'prop-types';

import './styles.scss';

const JSSvg = ({graphicTheme, isHovered}) => {

	const buildSvgClassName = () => {
		return isHovered ?
			'c-jsGraphic s-is-hovered'
			: 'c-jsGraphic'
	}

	return(
		<div className={buildSvgClassName()}>
			<JsSVG className='c-jsGraphic_bracket--left'/>
			<JsSVG className='c-jsGraphic_bracket--right'/>
		</div>
	)

}

export default JSSvg;

JSSvg.propTypes = {
	graphicTheme: PropTypes.shape({
		themeName: PropTypes.string.isRequired,
		hoverColor: PropTypes.string.isRequired,
		strokeWidth: PropTypes.number.isRequired,
		baseColor: PropTypes.string.isRequired
	}),

	isHovered: PropTypes.bool.isRequired
};

// <JsSVG 
// 				fill={graphicTheme.baseColor} 
// 				strokeWidth={graphicTheme.strokeWidth} 
// 				className='c-jsGraphic_graphic'
// 			/>