const express = require('express');
const data = require('./data.json');
const middleware = express.json();
const app = express();
app.use(middleware);

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const prop in data.notes) {
    notesArray.push(data.notes[prop]);
  }
  res.json(notesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
