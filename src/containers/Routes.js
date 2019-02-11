import React from 'react';
import {Route, Switch} from 'react-router-dom';

// local components
import Main from 'containers/Main';
import About from 'components/About';
import ReactProjects from 'containers/ReactProjects';

class Routes extends React.Component {
	render() {
		return(
				<Switch>

					<Route exact path='/' component={Main} />

					<Route path='/projects/react' component={ReactProjects} />

				</Switch>
		)
	}
}

export default Routes;