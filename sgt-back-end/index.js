const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const middleware = express.json();
const app = express();
app.use(middleware);

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const invalidInputErrors = [];
  const missingFieldMessage = ' is a required field';
  let invalidInput = false;
  if (!req.body.name) {
    invalidInputErrors.push({
      error: 'name' + missingFieldMessage
    });
    invalidInput = true;
  }
  if (!req.body.course) {
    invalidInputErrors.push({
      error: 'course' + missingFieldMessage
    });
    invalidInput = true;
  }
  if (!req.body.score) {
    invalidInputErrors.push({
      error: 'score' + missingFieldMessage
    });
    invalidInput = true;
  }
  if (req.body.score < 0 || req.body.score > 100) {
    invalidInputErrors.push({
      error: 'score must be a valid integer between 0 and 100'
    });
    invalidInput = true;
  }
  if (invalidInput === true) {
    if (invalidInputErrors.length === 1) {
      return res.status(400).json(invalidInputErrors[0]);
    } else {
      return res.status(400).json(invalidInputErrors);
    }
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
  `;
  const gradeInput = [
    req.body.name,
    req.body.course,
    req.body.score
  ];

  db.query(sql, gradeInput)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const invalidInputErrors = [];
  const missingFieldMessage = ' is a required field';
  let invalidInput = false;
  if (!req.body.name) {
    invalidInputErrors.push({
      error: 'name' + missingFieldMessage
    });
    invalidInput = true;
  }
  if (!req.body.course) {
    invalidInputErrors.push({
      error: 'course' + missingFieldMessage
    });
    invalidInput = true;
  }
  if (!req.body.score) {
    invalidInputErrors.push({
      error: 'score' + missingFieldMessage
    });
    invalidInput = true;
  }
  if (req.body.score < 0 || req.body.score > 100) {
    invalidInputErrors.push({
      error: 'score must be a valid integer between 0 and 100'
    });
    invalidInput = true;
  }
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    invalidInputErrors.push({
      error: '"gradeId" must be a positive integer'
    });
  }
  if (invalidInput === true) {
    if (invalidInputErrors.length === 1) {
      return res.status(400).json(invalidInputErrors[0]);
    } else {
      return res.status(400).json(invalidInputErrors);
    }
  }

  const sql = `
  update "grades"
    set "name" = $2, "course" = $3, "score" = $4
      where "gradeId" = $1
    returning *
`;
  const updateGrade = [
    gradeId,
    req.body.name,
    req.body.course,
    req.body.score
  ];

  db.query(sql, updateGrade)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with 'gradeId' ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
