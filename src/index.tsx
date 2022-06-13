import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './reduxState';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AppContext from './AppContext';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);

// Wrapping app in both a React context provider and Redux provider is strange.
// We're only doing it to showcase both options and make it easy to start building with either.
root.render(
	<React.StrictMode>
		<AppContext.Provider value={{ example: 'i am a context prop' }}>
			<Provider store={store}>
				<App />
			</Provider>
		</AppContext.Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();