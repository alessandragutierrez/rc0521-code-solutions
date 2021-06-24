const data = require('./data.json');
const writeFile = require('./write-file');

const updateNote = () => {
  const noteTarget = process.argv[3];
  const update = process.argv[4];
  for (const key in data.notes) {
    if (key === noteTarget) {
      data.notes[key] = update;
    }
  }
  writeFile();
};

module.exports = updateNote;
