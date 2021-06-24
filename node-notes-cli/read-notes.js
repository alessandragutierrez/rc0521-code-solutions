const data = require('./data.json');

const readNotes = () => {
  for (const key in data.notes) {
    console.log(key + ': ' + data.notes[key]);
  }
};

module.exports = readNotes;
