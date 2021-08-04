/* exported includes */

function includes(list, value) {
  if (list.data === value) return true;
  let boolean = false;
  while (list.next !== null) {
    if (list.next.data === value) {
      boolean = true;
    }
    list = list.next;
  }
  return boolean;
}
