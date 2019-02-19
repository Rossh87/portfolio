import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// Local components
import Navbar from '../Navbar';
import Routes from '../Routes';


class App extends Component {
  render() {
  	return(
		<Routes />
  	)
  }
}

export default App;
