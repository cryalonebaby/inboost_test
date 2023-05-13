import React from 'react';
// import { useGlobalContext } from '../context';
import { Navbar, Sidebar, Workspace, Notification } from '../components';

import styles from '../styles';

const Home = () => {
	return (
		<div className={styles.app}>
			<Navbar />
			<div className={styles.main}>
				<Sidebar />
				<Workspace />
			</div>
			<Notification />
		</div>
	);
};

export default Home;
