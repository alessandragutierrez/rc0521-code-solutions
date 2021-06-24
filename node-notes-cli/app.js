const fs = require('fs');
const data = require('./data.json');

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
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
};

const command = process.argv[2];

switch (command) {
  case 'read':
    readNotes();
    break;
  case 'create':
    addNote();
    break;
}
