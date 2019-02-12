import React from 'react';
import {Route, Switch} from 'react-router-dom';

// local components
import Homepage from 'components/Homepage';
import ProjectPage from 'containers/ProjectPage';

class Routes extends React.Component {
	render() {
		return(
				<Switch>

					<Route exact path='/' component={Homepage} />

					<Route path='/projects/:projectType' component={ProjectPage} />

				</Switch>
		)
	}
}

export default Routes;