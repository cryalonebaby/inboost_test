import React from 'react';
// import { useGlobalContext } from '../context';
import { Navbar, Sidebar, Workspace } from '../components';

import styles from '../styles';

const Home = () => {
	// const { addNoteToDb, getNoteById, getAllNotes, deleteNoteById, updateNote } =
	// 	useGlobalContext();

	return (
		<div className={styles.app}>
			<Navbar />
			<div className={styles.main}>
				<Sidebar />
				<Workspace />
			</div>
		</div>
	);
};

export default Home;
