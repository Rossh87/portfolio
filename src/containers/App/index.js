import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// Local components
import Routes from '../Routes';
import Wrapper from '../Wrapper';

class App extends Component {
  render() {
  	return(
  		<Router>
	  			<Wrapper>
	  				<Routes />
	  			</Wrapper>
  		</Router>
  	)
  }
}

export default App;
