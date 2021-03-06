const fs = require('fs');

const copySource = process.argv[2];
const copyTarget = process.argv[3];

fs.readFile(copySource, 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFile(copyTarget, data, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});
