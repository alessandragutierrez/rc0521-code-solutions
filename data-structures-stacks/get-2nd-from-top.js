/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstValue = stack.pop();
  if (firstValue === undefined) {
    return;
  }
  const secondValue = stack.peek();
  stack.push(firstValue);
  return secondValue;
}
