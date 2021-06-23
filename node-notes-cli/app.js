const dataJSON = require('./data.json');

const readNotes = () => {
  for (const key in dataJSON.notes) {
    console.log(key + ': ' + dataJSON.notes[key]);
  }
};

const command = process.argv[2];

switch (command) {
  case 'read':
    readNotes();
    break;
}
