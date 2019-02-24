import React from 'react';

import './styles.scss';

const AboutSplashSVG = props => {
	return(
		<svg className="c-about_splash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
			<defs>
				<radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
					<stop className="c-about_splash--stop1" offset="0%" />
					<stop className="c-about_splash--stop2" offset="70%"/>
					<stop className="c-about_splash--stop3" offset="100%"/>
			    </radialGradient>
			</defs>

			<circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
		</svg>
	)
}

export default AboutSplashSVG;