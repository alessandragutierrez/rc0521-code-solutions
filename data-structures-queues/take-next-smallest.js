/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;
  let first = queue.dequeue();
  if (queue.peek() === undefined) return first;

  while (queue.peek() !== undefined) {
    if (first <= queue.peek()) {
      return first;
    } else {
      queue.enqueue(first);
      first = queue.dequeue();
    }
  }
}
