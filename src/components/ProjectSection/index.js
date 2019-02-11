import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ProjectSection = (props) => {
	const {
		imageAlt,
		imageSrc,
		text,
		isInverted,
		repo,
		demoURL
	} = props;

	const getProjectSectionClasses = () => {
		return isInverted ?
			'c-project'
			: 'c-project s-is-inverted'
	};

	const buildLinks = () => {
		return demoURL ?
			<div className="c-project_links s-has-demo">
				<a href={demoURL} className="c-project_links--demo">
					<span>Go to live demo</span>
					<i className="far fa-arrow-alt-circle-right"></i>
				</a>
				<a href={repo} className="c-project_links--github">
					<span>View source code</span>
					<i className="fab fa-github"></i>
				</a>
			</div>
			:
			<div className="c-project_links">
				<a href={repo} className="c-project_links--github">
					<span>View source code</span>
					<i className="fab fa-github"></i>
				</a>
			</div>
	}

	return(
		<section className={getProjectSectionClasses()}>
			<div className="c-project_content">
				<article>
					{text}
				</article>
				{buildLinks()}
			</div>

			<a href={repo}>
				<img className='c-project_img' src={imageSrc} alt={imageAlt}/>
			</a>
		</section>
	)
}

export default ProjectSection;

ProjectSection.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	isInverted: PropTypes.bool.isRequired
}