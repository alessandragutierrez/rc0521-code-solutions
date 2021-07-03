const express = require('express');
const middleware = express.json();
const app = express();
app.use(middleware);

const getGrades = require('./get-grades');
app.get('/api/grades', (req, res) => {
  getGrades('/api/grades', req, res);
});

const postGrade = require('./post-grade');
app.post('/api/grades', (req, res) => {
  postGrade('/api/grades', req, res);
});

const putGrade = require('./put-grade');
app.put('/api/grades/:gradeId', (req, res) => {
  putGrade('/api/grades/:gradeId', req, res);
});

const deleteGrade = require('./delete-grade');
app.delete('/api/grades/:gradeId', (req, res) => {
  deleteGrade('/api/grades/:gradeId', req, res);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
