const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const calculate = (number1, operation, number2) => {
  if (operation === 'plus') {
    console.log('result:', add(number1, number2));
  } else if (operation === 'minus') {
    console.log('result:', subtract(number1, number2));
  } else if (operation === 'times') {
    console.log('result:', multiply(number1, number2));
  } else if (operation === 'over') {
    console.log('result:', divide(number1, number2));
  }
};

const number1 = parseInt(process.argv[2]);
const operation = process.argv[3];
const number2 = parseInt(process.argv[4]);

calculate(number1, operation, number2);
