import React, { useState } from 'react';
import AppContext from '../AppContext';
import { fetchAuditRecords } from '../services/api';

import { Page } from './layout';

export function AppContextPage() {
	const [status, setStatus] = useState('idle');
	const [auditRecords, setAuditRecords] = useState(null);
	const appContext = React.useContext(AppContext);

	const clearAuditRecords = () => {
		setAuditRecords(null);
	};

	const getAuditRecords = async () => {
		let result;
		try {
			setStatus('loading');
			result = await fetchAuditRecords();
		} catch (err) {
			console.error('Problem fetching audit records', err);
			setStatus('failed');
			return;
		}
		setAuditRecords(result);
		setStatus('idle');
	};

	const updateExampleContextProp = () => {
		appContext.setExampleProp && appContext.setExampleProp(Math.random() * 1000);
	};

	return (
		<Page>
			<div>I am AppContextPage!</div>
			<div>This is the value of AppContext.exampleProp: {appContext.exampleProp || ''}</div>
			<div>Status of fetching auditRecords: {status}</div>
			<div>Contents of auditRecords are currently: {JSON.stringify(auditRecords)}</div>
			<button aria-label="Reset audit records" onClick={clearAuditRecords}>
				Reset audit records
			</button>
			<button aria-label="Fetch audit records" onClick={getAuditRecords}>
				Fetch audit records
			</button>
			<button aria-label="Fetch audit records" onClick={updateExampleContextProp}>
				Update app context example prop to random number
			</button>
		</Page>
	);
}
