const data = require('./data.json');
const writeFile = require('./write-file');

const deleteNote = () => {
  const noteTarget = process.argv[3];
  for (const key in data.notes) {
    if (key === noteTarget) {
      delete data.notes[key];
    }
  }
  writeFile();
};

module.exports = deleteNote;
