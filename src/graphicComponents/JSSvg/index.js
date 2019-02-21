import React from 'react';
import {FaJs} from 'react-icons/fa';
import PropTypes from 'prop-types';

import './styles.scss';

const JSSvg = ({graphicTheme, isHovered}) => {

	const buildSvgClassName = () => {
		return isHovered ?
			'c-jsGraphic s-is-hovered'
			: 'c-jsGraphic'
	}

	return(

			<FaJs 
				fill={graphicTheme.baseColor} 
				strokeWidth={graphicTheme.strokeWidth} 
				className={buildSvgClassName()}
			/>
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

		// <div className="c-jsGraphic_anchor">
		// 	<div className={isHovered ?"c-jsGraphic_background s-is-hovered" : "c-jsGraphic_background"}></div>