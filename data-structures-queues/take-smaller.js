/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  const next = queue.dequeue();
  if (first === undefined) return;
  else if (next === undefined) return first;
  else if (first < next || first === next) {
    queue.enqueue(next);
    return first;
  }
  queue.enqueue(first);
  return next;
}
