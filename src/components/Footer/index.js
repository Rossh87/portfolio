import React from 'react';


// Get local components
import FooterLinkItem from 'legos/FooterLinkItem';

// Get svg graphics
import {
	FaGithubSquare,
	FaLinkedin,
	FaFilePdf
} from 'react-icons/fa';


import './styles.scss';

const Footer = props => {
	const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

	return(
		<footer className="c-footer">
			<ul className="c-footer_links">

				<FooterLinkItem icon={FaFilePdf} path={`${REACT_APP_API_ENDPOINT}/download/resume`}>
					Résumé
				</FooterLinkItem>
				
				<FooterLinkItem path="https://www.linkedin.com/in/rhunter-dev" icon={FaLinkedin}>
					LinkedIn
				</FooterLinkItem>

				<FooterLinkItem  path="https://github.com/Rossh87" icon={FaGithubSquare}>
					GitHub
				</FooterLinkItem>

				<FooterLinkItem path="#about">
					Ross Hunter, 2019
				</FooterLinkItem>

			</ul>
		</footer>
	)
}

export default Footer;