/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let current = list;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = new LinkedList(value);
  return list;
}
