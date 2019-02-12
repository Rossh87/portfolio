// export function fetchAjax(path) {
// 	return fetch(`http://localhost:8001/projects/${path}`)
// 		.then(res => verifyResponseOk(res))
// 		.then(res => res.json())
// 		.catch(err => console.error(err))
// }

export async function asyncFetchAjax(path) {
	try {
		const res = await fetch(`http://localhost:8001/projects/${path}`);

		verifyResponseOk(res);

		return await res.json();
	}

	catch(err) {
		console.error(err);
	}
}

function verifyResponseOk(res) {
	// B/c promise returned by fetch does *not* reject on bad status code
	// we create a handler to test response once it resolves.  W/e is thrown here
	// will be picked up by the 'catch' block above.
	if(!res.ok || res.status > 299) {
		throw(res)
	}

	return res;
}


