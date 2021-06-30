const fs = require('fs');

const writeFile = (data, callback) => {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), callback);
};

module.exports = writeFile;
