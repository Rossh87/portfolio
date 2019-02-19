import axios from 'axios';

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

async function ajaxHandler(method, path, data) {
	try {
		const response = await axios[method](`${REACT_APP_API_ENDPOINT}/${path}`, data);

		return response.data;
	}

	// Here we log errors, then re-throw to pass them to handlers defined 
	// in the components that actually use this function.
	catch(err) {
		console.error(err);
		throw(err);
	}
};

export default ajaxHandler;

