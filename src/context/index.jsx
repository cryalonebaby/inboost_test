import React, { useEffect, useState, useContext, createContext } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [db, setDb] = useState(null);

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

	//* Function to add the note
	const addNoteToDb = (note) => {
		const transaction = db.transaction('notes', 'readwrite');

		const store = transaction.objectStore('notes');

		const request = store.add(note);

		request.onsuccess = () => {
			console.log('Note added successfully', request.result);
		};

		request.onerror = () => {
			console.error('Error', request.error);
		};
	};

	//* Function to get the note by id
	const getNoteById = (id) => {
		const transaction = db.transaction('notes', 'readonly');

		const store = transaction.objectStore('notes');
		const idRequest = store.get(id);

		idRequest.onerror = () => {
			console.error(`Error while getting the note by id: ${id}`);
		};

		idRequest.onsuccess = () => {
			const result = idRequest.result;
			console.log('idRequest', result);

			transaction.oncomplete = () => {
				return result;
			};
		};
	};

	//* Function to get all notes
	const getAllNotes = () => {
		const transaction = db.transaction('notes', 'readonly');

		const store = transaction.objectStore('notes');
		const allRequest = store.getAll();

		allRequest.onerror = () => {
			console.error('Error while getting notes');
		};

		allRequest.onsuccess = () => {
			const result = allRequest.result;
			console.log('allRequest', result);

			transaction.oncomplete = () => {
				return result;
			};
		};
	};

	//* Function to delete the note by id
	const deleteNoteById = (id) => {
		const transaction = db.transaction('notes', 'readwrite');

		const store = transaction.objectStore('notes');
		const deleteRequest = store.delete(id);

		deleteRequest.onerror = () => {
			console.error(`Error while deleting the note by id: ${id}`);
		};

		deleteRequest.onsuccess = () => {
			console.log('Successfully deleted the note by id', id);

			transaction.oncomplete = () => {
				return id;
			};
		};
	};

	//* Function to delete the note by id
	const updateNote = (newNote) => {
		const transaction = db.transaction('notes', 'readwrite');

		const store = transaction.objectStore('notes');
		const updateRequest = store.put(newNote);

		updateRequest.onerror = () => {
			console.error('Error while updating the note');
		};

		updateRequest.onsuccess = () => {
			console.log('Successfully updated the note', newNote);

			transaction.oncomplete = () => {
				return newNote;
			};
		};
	};

	return (
		<GlobalContext.Provider
			value={{
				addNoteToDb,
				getNoteById,
				getAllNotes,
				deleteNoteById,
				updateNote,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
