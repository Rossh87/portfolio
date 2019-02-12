import React from 'react';

// Local component
import Routes from '../Routes';
import Wrapper from '../Wrapper';
import Navbar from '../Navbar';

class Main extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Wrapper>
					<Routes />
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default Main;