import axios from 'axios';

const endpoint = process.env.NODE_ENV === 'production' ? 
	process.env.REACT_APP_API_ENDPOINT
	:
	'http://localhost:8001/api';

function cleanupPath(path) {
	const expToMatch = /(?<!^https:\/\/)\/{2,}/gi;

	return path.replace(expToMatch, '/');
}

async function ajaxHandler(method, path, data) {
	path = cleanupPath(`${endpoint}/${path}`);

	const response = await axios[method](`${endpoint}/${path}`, data);

	return response.data;
};

export default ajaxHandler;

