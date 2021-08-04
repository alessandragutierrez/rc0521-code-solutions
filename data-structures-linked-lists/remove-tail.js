/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  let current = list;
  while (current.next.next !== null) {
    current = current.next;
  }
  current.next = null;
  return list;
}
