import React from 'react';

// local components
import Navbar from '../Navbar';

class Main extends React.Component {
	render() {
		return(
			<div>
				<Navbar />
				{this.props.children}
			</div>
		)
	}
}

export default Main;