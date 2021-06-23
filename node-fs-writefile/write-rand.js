const fs = require('fs');

const randomNumber = Math.floor(Math.random() * 100);
fs.writeFile('random.txt', randomNumber.toString() + '\n', 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
