const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const prop in grades) {
    gradesArray.push(grades[prop]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  for (const prop in grades) {
    if (req.params.id === grades[prop].id.toString()) {
      delete grades[prop];
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
