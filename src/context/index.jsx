import React, {
	useEffect,
	useState,
	useContext,
	createContext,
	useCallback,
} from 'react';

import {
	addNoteToDb,
	getAllNotes,
	deleteNote,
	updateNote,
	getNoteById,
} from '../utils/indexedDbUtils';

import { filterListBySearch } from '../utils/filtedListBySearch';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [db, setDb] = useState(null);
	const [notes, setNotes] = useState([]);
	const [selected, setSelected] = useState({
		id: null,
		date: null,
		text: '',
	});
	const [editId, setEditId] = useState(0);
	const [search, setSearch] = useState('');
	const [filteredNotes, setFilteredNotes] = useState([]);

	const fetchNotes = useCallback(async () => {
		try {
			if (db) {
				const result = await getAllNotes(db);
				setNotes(result);
			}
		} catch (e) {
			console.error('Error while getting notes', e);
		}
	}, [db]);

	useEffect(() => {
		const filtered = filterListBySearch(notes, search);
		setFilteredNotes(filtered);
	}, [notes, search]);

	//* Create connection to IndexedDb
	useEffect(() => {
		const openRequest = indexedDB.open('inboostDb', 2);

		openRequest.onerror = (event) => {
			console.error('An error occurred with IndexedDB');
			console.error(event);
		};

		openRequest.onupgradeneeded = () => {
			const db = openRequest.result;
			const store = db.createObjectStore('notes', { keyPath: 'id' });
			store.createIndex('notes_date', ['date'], { unique: false });
			store.createIndex('dates_and_text', ['date', 'text'], { unique: false });
		};

		openRequest.onsuccess = () => {
			setDb(openRequest.result);
		};

		return () => {
			if (db) {
				db.close();
				setDb(null);
			}
		};
	}, []);

	//* Fetch data to state
	useEffect(() => {
		fetchNotes();
	}, [fetchNotes]);

	const handleAddNote = useCallback(
		async (note) => {
			try {
				if (db) {
					const newNote = await addNoteToDb(db, note);
					fetchNotes();
					setSelected(newNote);
					setEditId(newNote.id);
				}
			} catch (e) {
				console.error('Error while adding note', e);
			}
		},
		[db, fetchNotes]
	);

	const handleDeleteNote = useCallback(
		async (id) => {
			try {
				if (db) {
					await deleteNote(db, id);
					fetchNotes();
				}
			} catch (e) {
				console.error('Error while deleting note', e);
			}
		},
		[db, fetchNotes]
	);

	const handleUpdateNote = useCallback(
		async (newNote) => {
			try {
				if (db) {
					await updateNote(db, newNote);
					fetchNotes();
				}
			} catch (e) {
				console.error('Error while updating note', e);
			}
		},
		[db, fetchNotes]
	);

	return (
		<GlobalContext.Provider
			value={{
				notes,
				selected,
				setSelected,
				editId,
				setEditId,
				search,
				setSearch,
				filteredNotes,
				addNoteToDb: handleAddNote,
				getNoteById,
				getAllNotes,
				deleteNote: handleDeleteNote,
				updateNote: handleUpdateNote,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
