import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './page';
import { GlobalContextProvider } from './context';
import './index.css';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</GlobalContextProvider>
		</BrowserRouter>
	);
};

export default App;
