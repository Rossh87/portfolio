import React from 'react';
import headshot from 'images/headshot.jpg'

import './styles.scss';

const IntroHeading = (props) => {
	return(
		<section className="intro">
			<div className="intro_heading">
				<img className="intro_headshot" src={headshot} alt="author's headshot"/>
			</div>
			<article className="intro_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quisquam esse ex amet! Mollitia natus sint laudantium vel rem quasi delectus eveniet, sit tempore vitae temporibus, nisi ab, voluptatem, suscipit. Eveniet natus totam et repudiandae eligendi, soluta similique inventore magnam.</article>
		</section>
	)
}

export default IntroHeading;