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
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id) || Math.sign(id) !== 1) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    return res.status(404).json({ error: 'cannot find note with id ' + id });
  }
  res.status(200).json(data.notes[id]);
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ error: 'content is a required field' });
  }
  const newNote = req.body;
  const id = data.nextId;
  data.nextId += 1;
  newNote.id = id;
  data.notes[id] = newNote;
  if (!data.notes[id]) {
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
  res.status(201).json(newNote);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
