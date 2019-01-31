import React from 'react';
import ReactDOM from 'react-dom';

// Get shared styles.  Note:
// In all files, non-relative paths of type
//.scss are resolved using the 
// SASS_PATH environment variable.
import 'commonStyles/_base.scss';

// Get local components
import App from './containers/App';

const root = document.querySelector('#root');

ReactDOM.render(
	<App />,
	root
);