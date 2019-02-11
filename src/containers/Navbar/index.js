import React from 'react';

// Local components
import LinkItem from 'legos/LinkItem';

import './styles.scss';

const Navbar = ({navIsOpen, handleClick}) => {

	const getNavClasses = () => {	
		return navIsOpen ?
			"c-nav s-is-open"
			: "c-nav"
	}

	return(
			<nav className={getNavClasses()}>
				<ul className="c-nav_menu">

					<LinkItem
							styleClass="c-nav_item"
							isLinkComponent={true}
							clickHandler={handleClick}
							path={'/'}
						>
						Home
					</LinkItem>

					<LinkItem
						styleClass="c-nav_item"
						isLinkComponent={true}
						clickHandler={handleClick}
						path={'/about'}
					>
						About
					</LinkItem>

					<LinkItem
						styleClass="c-nav_item"
						isLinkComponent={true}
						clickHandler={handleClick}
						path={'/projects'}
					>
						Projects
					</LinkItem>

					<LinkItem
						styleClass="c-nav_item"
						isLinkComponent={true}
						clickHandler={handleClick}
						path={'/contact'}
					>
						Contact
					</LinkItem>
					
				</ul>
			</nav>
		)
}

export default Navbar;