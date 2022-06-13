import React from 'react';

type AppContext = {
	exampleProp?: string;
	setExampleProp?: (any) => void;
};
export default React.createContext<AppContext>({});
