import React from 'react';
import {Route, Switch} from 'react-router-dom';

// local components
import Homepage from 'pages/Homepage';
import ProjectPage from 'pages/ProjectPage';
import Navbar from 'containers/Navbar';

import './styles.scss';

class Routes extends React.Component {
	render() {
		return(
			<React.Fragment>
				<Navbar />
				
				<div className="wrapper">
					<Switch>

						<Route exact path='/' component={Homepage} />

						<Route path='/projects/:projectType' component={ProjectPage} />

					</Switch>
				</div>
			</React.Fragment>

		)
	}
}

export default Routes;