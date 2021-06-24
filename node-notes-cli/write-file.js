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

module.exports = writeFile;
