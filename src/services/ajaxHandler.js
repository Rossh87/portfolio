import axios from 'axios';

const endpoint = process.env.NODE_ENV === 'production' ? 
	process.env.REACT_APP_API_ENDPOINT
	:
	'http://localhost:8001/api/';

async function ajaxHandler(method, path, data) {
		const response = await axios[method](`${REACT_APP_API_ENDPOINT}/${path}`, data);

		return response.data;
};

export default ajaxHandler;

