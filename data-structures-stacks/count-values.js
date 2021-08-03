/* exported countValues */

function countValues(stack) {
  let value = stack.pop();
  if (value === undefined) {
    return 0;
  } let i = 0;
  while (value !== undefined) {
    i++;
    value = stack.pop();
  }
  return i;
}
