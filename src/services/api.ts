const API_BASE = 'https://api.pagerduty.com/';
const PAGERDUTY_TEST_API_TOKEN = 'y_NbAkKc66ryYTWUXYEu';

function call(resource, options?) {
	return fetch(`${API_BASE}${resource}`, {
		...options,
		headers: { Authorization: `Token token=${PAGERDUTY_TEST_API_TOKEN}`, ...options?.headers },
	});
}

export function fetchAuditRecords() {
	return call(`audit/records`).then((resp) => resp.json());
}
