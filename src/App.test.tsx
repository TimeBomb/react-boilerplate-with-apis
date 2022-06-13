import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './reduxState';
import App from './App';

test('renders "Status of fetching" text', () => {
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>,
	);

	expect(getByText(/AppContextPage/)).toBeInTheDocument();
	expect(getByText(/AppReduxPage/)).toBeInTheDocument();
});
