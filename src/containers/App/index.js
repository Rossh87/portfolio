import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// Local components
import Routes from '../Routes';
import Main from '../Main';


class App extends Component {
  render() {
  	return(
		<Router>
			<Main />
		</Router>
  	)
  }
}

export default App;
