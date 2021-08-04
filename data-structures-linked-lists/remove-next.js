/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const listBody = list.next.next;
  list.next = listBody;
  return list;
}
