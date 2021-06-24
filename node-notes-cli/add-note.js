const data = require('./data.json');
const writeFile = require('./write-file');

const addNote = () => {
  const newNote = process.argv[3];
  data.notes[data.nextId] = newNote;
  data.nextId++;
  writeFile();
};

module.exports = addNote;
