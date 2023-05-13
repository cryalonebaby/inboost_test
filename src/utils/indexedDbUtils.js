//* Function to add the note
export const addNoteToDb = (db, note) => {
  const transaction = db.transaction('notes', 'readwrite');
  const store = transaction.objectStore('notes');
  const request = store.add(note);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      console.log('Note added successfully', request.result);
      resolve(note);
    };

    request.onerror = () => {
      console.error('Error', request.error);
      reject(new Error('Error while adding note'));
    };
  })
};

//* Function to delete the note by id
export const deleteNote = (db, id) => {
  const transaction = db.transaction('notes', 'readwrite');
  const store = transaction.objectStore('notes');
  const deleteRequest = store.delete(id);

  return new Promise((resolve, reject) => {
    deleteRequest.onsuccess = () => {
      console.log('Successfully deleted the note by id', id);
      resolve()
    };

    deleteRequest.onerror = () => {
      console.error(`Error while deleting the note by id: ${id}`);
      reject(new Error('Error while deleting the note'))
    };

  })

};

//* Function to delete the note by id
export const updateNote = (db, newNote) => {
  const transaction = db.transaction('notes', 'readwrite');
  const store = transaction.objectStore('notes');
  const updateRequest = store.put(newNote);

  return new Promise((resolve, reject) => {
    updateRequest.onsuccess = () => {
      console.log('Successfully updated the note', newNote);
      resolve()
    };

    updateRequest.onerror = () => {
      console.error('Error while updating the note');
      reject(new Error('Error while updating the note'))
    };
  })
};

//* Function to get all notes
export const getAllNotes = (db) => {
  const transaction = db.transaction('notes', 'readonly');
  const store = transaction.objectStore('notes');
  const allRequest = store.getAll();

  return new Promise((resolve, reject) => {
    allRequest.onsuccess = () => {
      const result = allRequest.result;
      resolve(result);
    };

    allRequest.onerror = () => {
      console.error('Error while getting notes');
      reject(new Error('Error while getting notes'));
    };
  });
};

//* Function to get the note by id
export const getNoteById = (db, id) => {
  const transaction = db.transaction('notes', 'readonly');
  const store = transaction.objectStore('notes');
  const idRequest = store.get(id);

  return new Promise((resolve, reject) => {
    idRequest.onsuccess = () => {
      const result = idRequest.result;
      console.log('idRequest', result);
      resolve(result)
    };

    idRequest.onerror = () => {
      console.error(`Error while getting the note by id: ${id}`);
    };
  })
};