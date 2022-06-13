import React from 'react';

import { useAppSelector, useAppDispatch } from '../hooks';
import { resetAuditRecords, selectAuditRecords, fetchAuditRecordsAsync } from '../reduxState';
import { Page } from './layout';

export function AppReduxPage() {
	const auditRecords = useAppSelector(selectAuditRecords);
	const dispatch = useAppDispatch();

	return (
		<Page>
			<div>I am AppReduxPage!</div>
			<div>Status of fetching auditRecords: {auditRecords.status}</div>
			<div>Contents of auditRecords are currently: {JSON.stringify(auditRecords.data)}</div>
			<button aria-label="Reset audit records" onClick={() => dispatch(resetAuditRecords())}>
				Reset audit records
			</button>
			<button
				aria-label="Fetch audit records"
				onClick={() => dispatch(fetchAuditRecordsAsync())}
			>
				Fetch audit records
			</button>
		</Page>
	);
}
