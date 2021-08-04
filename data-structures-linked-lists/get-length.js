/* exported getLength */

function getLength(list) {
  if (list.next === null) return 1;
  let count = 1;
  while (list.next !== null) {
    count++;
    list = list.next;
  }
  return count;
}
