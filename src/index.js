import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// Get shared styles. 
import 'commonStyles/_base.scss';
import 'commonStyles/_colors.scss';

// Get local components
import App from './containers/App';

const root = document.querySelector('#root');

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	root
);