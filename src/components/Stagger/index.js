import React from 'react';

import './styles.scss';

class Stagger extends React.Component {
	componentDidMount() {

	}

	renderChildren() {
		const {children} = this.props;

		const modChildren = React.Children.map(children, child => {
			return React.cloneElement(child, {
				className: 'staggerChild'
			});
		});

		return modChildren;
	}

	render() {
		return(
			this.renderChildren()
		)
	}
}

export default Stagger;