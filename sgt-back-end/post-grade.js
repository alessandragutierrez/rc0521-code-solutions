const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const postGrade = (path, req, res) => {
  const invalidInputErrors = [];
  const missingFieldMessage = 'is a required field';
  let invalidInput = false;
  if (!req.body.name) {
    invalidInputErrors.push({
      error: `name ${missingFieldMessage}`
    });
    invalidInput = true;
  }
  if (!req.body.course) {
    invalidInputErrors.push({
      error: `course ${missingFieldMessage}`
    });
    invalidInput = true;
  }
  if (!req.body.score) {
    invalidInputErrors.push({
      error: `score ${missingFieldMessage}`
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
};

module.exports = postGrade;
