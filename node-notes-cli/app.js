const fs = require('fs');
const data = require('./data.json');
const note = process.argv[3];

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
  data.notes[data.nextId] = note;
  data.nextId++;
  writeFile();
};

const deleteNote = () => {
  for (const key in data.notes) {
    if (key === note) {
      delete data.notes[key];
    }
  }
  writeFile();
};

const updateNote = () => {
  const update = process.argv[4];
  for (const key in data.notes) {
    if (key === note) {
      data.notes[key] = update;
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
  case 'update':
    updateNote();
    break;
}
