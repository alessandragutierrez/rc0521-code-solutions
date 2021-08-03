/* exported isEmpty */

function isEmpty(stack) {
  const topValue = stack.peek();
  return topValue === undefined;
}
