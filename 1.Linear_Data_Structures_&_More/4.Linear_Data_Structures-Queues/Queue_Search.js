class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.queue[this.rear] = val;
    this.rear++;
  }

  dequeue() {
    var val = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return val;
  }

  peek() {
    return this.queue[this.head];
  }

  length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length == 0;
  }

  print() {
    console.log(this.queue);
  }

  search(val) {
    var found = false;
    var i = -1;

    while (i < this.queue.length && !found) {
      if (this.queue[i] == val) {
        found = true;
      }
      i++;
    }

    if (!found) {
      return -1;
    } else {
      return i;
    }
  }
}

var q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.search(2));
console.log(q.search(5));
