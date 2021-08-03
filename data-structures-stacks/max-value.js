/* exported maxValue */

function maxValue(stack) {
  let x = stack.pop();
  if (x === undefined) {
    return -Infinity;
  }
  let maxValue = x;
  while (x !== undefined) {
    x = stack.pop();
    if (x > maxValue) {
      maxValue = x;
    }
  }
  return maxValue;
}
