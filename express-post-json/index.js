const express = require('express');

let nextId = 1;
const grades = {};

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const prop in grades) {
    gradesArray.push(grades[prop]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).json(grades[nextId]);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
