import React from 'react';
import styles from '../styles';
import { useGlobalContext } from '../context';

const testNote = {
	id: 999,
	date: new Date(),
	text: 'Updated Note Again',
};

const Home = () => {
	const { addNoteToDb, getNoteById, getAllNotes, deleteNoteById, updateNote } =
		useGlobalContext();

	return (
		<>
			<div className={styles.test}>Home</div>
			<button
				onClick={() => addNoteToDb(testNote)}
				className="px-10 py-5 border-solid border-2 border-black"
			>
				Add
			</button>
			<button
				onClick={() => getAllNotes()}
				className="px-10 py-5 border-solid border-2 border-black"
			>
				Read
			</button>
			<button
				onClick={() => getNoteById(999)}
				className="px-10 py-5 border-solid border-2 border-black"
			>
				Read By Id
			</button>
			<button
				onClick={() => deleteNoteById(2)}
				className="px-10 py-5 border-solid border-2 border-black"
			>
				Delete
			</button>
			<button
				onClick={() => updateNote(testNote)}
				className="px-10 py-5 border-solid border-2 border-black"
			>
				Update
			</button>
		</>
	);
};

export default Home;
