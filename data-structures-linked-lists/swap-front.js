/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const firstValue = list.data;
  const secondValue = list.next.data;
  list.data = secondValue;
  list.next.data = firstValue;
  return list;
}
