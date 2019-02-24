import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

// react-icons library exports icons as functions that return
// svg elements.  Explicitly invoke them to display icon.

const FooterLinkItem = ({path, children, icon}) => {
	return(
		<li className="c-footer_link">
			<a href={path}>
				<span className="c-footer_text">
					{children}
				</span>

				{icon &&

					<span className="c-footer_graphic">
						{icon()}
					</span>

				}
			</a>
		</li>
	)
}

export default FooterLinkItem;

FooterLinkItem.propTypes = {
	path: PropTypes.string.isRequired,
	icon: PropTypes.func
};