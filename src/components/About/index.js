import React from 'react';

import ProgressMeter from 'legos/ProgressMeter';

import './styles.scss';

const About = (props) => {
	return(
		<section className="c-about">

			<div className="c-about_header">
				<h1>About Me</h1>
			</div>

			<div className="c-about_meter">
			</div>

			<div className="c-about_text">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo accusantium, eius, excepturi accusamus repellat, doloremque molestias dolore exercitationem sint recusandae officia inventore deleniti et eos quasi nihil nobis. Deserunt pariatur animi temporibus velit eius veritatis. Eveniet voluptatibus quia, sunt a?
				</p>
			</div>

			<div className="c-about_graphic">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo accusantium, eius, excepturi accusamus repellat, doloremque molestias dolore exercitationem sint recusandae officia inventore deleniti et eos quasi nihil nobis. Deserunt pariatur animi temporibus velit eius veritatis. Eveniet voluptatibus quia, sunt a?
				</p>
			</div>
			
		</section>
	)
};

export default About;