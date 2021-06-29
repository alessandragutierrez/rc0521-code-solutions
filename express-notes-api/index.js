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

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id) || Math.sign(id) !== 1) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    return res.status(404).json({ error: 'cannot find note with id ' + id });
  }
  res.json(data.notes[id]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
