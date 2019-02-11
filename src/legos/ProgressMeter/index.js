import React from 'react';
import PropTypes from 'prop-types';


// This components animation triggers is 
class ProgressMeter extends React.Component {
	constructor(props) {
		super(props);

		this.meterPath = React.createRef();
	}

	componentDidUpdate(prevProps) {
		if(this.props.isHovered !== prevProps.isHovered){
			this.toggleAnimation()
		}
	}

	toggleAnimation = () => {
		// credit for this code goes to Dave Rupert @
		// https://daverupert.com/2018/03/animated-svg-radial-progress-bars.
		// It's adapted a bit here for React.
		const {isHovered} = this.props;

		const path = this.meterPath.current;
		let length = path.getTotalLength();
		let value = parseInt(path.parentNode.getAttribute('data-value'));
		let to = length * ((100 - value) / 100);
		path.getBoundingClientRect();
		path.style.strokeDashoffset = isHovered ?
			Math.max(0, to)
			: 349.517
	}



	render() {
		const {divClassName, color, completion} = this.props;

		return(
			<div className={divClassName}>
				<svg ref={this.svg} xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 200 200" data-value={completion}>
					  <path className="bg" stroke="#ccc" d="M41 149.5a77 77 0 1 1 117.93 0"  fill="none"/>
					  <path ref={this.meterPath} className="meter" stroke={color} d="M41 149.5a77 77 0 1 1 117.93 0" fill="none" strokeDasharray="349.5177307128906" strokeDashoffset="349.5177307128906"/>
				</svg>
			</div>
		)
	}
}

export default ProgressMeter;

ProgressMeter.propTypes = {
	color: PropTypes.string.isRequired,
	isHovered: PropTypes.bool.isRequired,
	// props.completion must be a string of 
	// numeral characters to function
	completion: PropTypes.string.isRequired 
}