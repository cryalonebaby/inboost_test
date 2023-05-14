import React, { useState } from 'react';

import { Navbar, Sidebar, Workspace, Notification } from '../components';

import styles from '../styles';

const Home = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className={`${styles.app} appContainer`}>
			<Navbar toggleSidebar={toggleSidebar} />
			<div className={styles.main}>
				<Sidebar sidebarOpen={sidebarOpen} />
				<Workspace />
			</div>
			<Notification />
		</div>
	);
};

export default Home;
