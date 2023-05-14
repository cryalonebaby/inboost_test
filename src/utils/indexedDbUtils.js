//* Function for indexedDB Operations
const indexedDbTransaction = (db, operation, key, note) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('notes', 'readwrite');
    const store = transaction.objectStore('notes');
    const request = operation === 'add' ? store.add(note) :
      operation === 'delete' ? store.delete(key) :
        operation === 'update' ? store.put(note) :
          operation === 'get' ? store.get(key) :
            operation === 'getAll' ? store.getAll() : null;

    if (!request) {
      reject(new Error('Invalid operation'));
      return;
    }

    request.onsuccess = () => {
      if (operation === 'add' || operation === 'update') {
        resolve(key);
      } else if (operation === 'delete') {
        resolve();
      } else if (operation === 'get' || operation === 'getAll') {
        const result = request.result;
        resolve(result);
      }
    };

    request.onerror = () => {
      console.error(`Error while proccessing the request`);
      reject(new Error(`Error while proccessing the request`));
    };


  })
}

//* Function to add the note
export const addNoteToDb = (db, note) => {
  return indexedDbTransaction(db, 'add', 0, note)
};

//* Function to delete the note by id
export const deleteNote = (db, id) => {
  return indexedDbTransaction(db, 'delete', id, {})
};

//* Function to delete the note by id
export const updateNote = (db, note) => {
  return indexedDbTransaction(db, 'update', 0, note)
};

//* Function to get all notes
export const getAllNotes = (db) => {
  return indexedDbTransaction(db, 'getAll', 0, {})
};

//* Function to get the note by id
export const getNoteById = (db, id) => {
  return indexedDbTransaction(db, 'get', id, {})
};