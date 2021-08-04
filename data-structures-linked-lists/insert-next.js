/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const listBody = list.next;
  list.next = new LinkedList(value);
  list.next.next = listBody;
  return list;
}
