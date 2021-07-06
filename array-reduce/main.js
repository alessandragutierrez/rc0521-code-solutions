const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((x, y) => x + y);
console.log('sum:', sum);

const product = numbers.reduce((x, y) => x * y);
console.log('product:', product);

const findBalance = (x, y) => {
  if (y.type === 'deposit') {
    return x + y.amount;
  } else if (y.type === 'withdrawal') {
    return x - y.amount;
  }
};
const balance = account.reduce(findBalance, 0);
console.log('balance:', balance);

const combineTraits = (x, y) => {
  return (x = Object.assign(x, y));
};
const composite = traits.reduce(combineTraits);
console.log('composite:', composite);
