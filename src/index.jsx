import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './page';
import { GlobalContextProvider } from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<GlobalContextProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</GlobalContextProvider>
	</BrowserRouter>
);
