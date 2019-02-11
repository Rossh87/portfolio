import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const modalRoot = document.getElementById('modal-root');

const Hero = ({open}) => {
	const heroClasses = `hero ${open && 'hero--open'}`;

	const heroDiv = (
		<div className={heroClasses}>
			<div className="hero_half hero_half--left">cre</div>
			<div className="hero_half hero_half--right">ate</div>
		</div>
	);

	return (
		ReactDOM.createPortal(
			heroDiv,
			modalRoot
		)
	)
};

export default Hero;