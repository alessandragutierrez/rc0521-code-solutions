const readNotes = require('./read-notes');
const addNote = require('./add-note');
const deleteNote = require('./delete-note');
const updateNote = require('./update-note');

const command = process.argv[2];

switch (command) {
  case 'read':
    readNotes();
    break;
  case 'create':
    addNote();
    break;
  case 'delete':
    deleteNote();
    break;
  case 'update':
    updateNote();
    break;
}
