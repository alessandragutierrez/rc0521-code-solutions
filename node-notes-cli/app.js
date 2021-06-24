const fs = require('fs');
const data = require('./data.json');

const writeFile = () => {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
};

const readNotes = () => {
  for (const key in data.notes) {
    console.log(key + ': ' + data.notes[key]);
  }
};

const addNote = () => {
  const note = process.argv[3];
  const noteId = data.nextId;
  data.notes[noteId] = note;
  data.nextId++;
  writeFile();
};

const deleteNote = () => {
  const targetNote = process.argv[3];
  for (const key in data.notes) {
    if (key === targetNote) {
      delete data.notes[key];
    }
  }
  writeFile();
};

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
}
