const takeAChance = require('./take-a-chance');

const promise = takeAChance('Alessandra');

promise.then(
  result => console.log(result),
  error => console.log(error.message)
);
