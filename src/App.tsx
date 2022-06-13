import React, { useState } from 'react';
import { AppReduxPage } from './components/AppReduxPage';
import { AppContextPage } from './components/AppContextPage';
import AppContext from './AppContext';

function App() {
	const [exampleContextProp, setExampleContextProp] = useState('i am a context prop');

	return (
		<div className="App">
			<AppReduxPage />
			<AppContext.Provider
				value={{ exampleProp: exampleContextProp, setExampleProp: setExampleContextProp }}
			>
				<AppContextPage />
			</AppContext.Provider>
		</div>
	);
}

export default App;
