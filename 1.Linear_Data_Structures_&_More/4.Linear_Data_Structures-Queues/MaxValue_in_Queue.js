class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(val) {
    var inNode = new Node(val, null);
    if (this.size == 0) {
      this.front = this.rear = inNode;
      this.size++;
    } else {
      this.rear.next = inNode;
      this.rear = inNode;
      this.size++;
    }
  }

  dequeue() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      var val = this.front.value;
      this.front = this.front.next;
      size--;
      return val;
    }
  }

  peek() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    var holder = this.front;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  max() {
    var holder = this.front;
    var maxVal = this.front.value;

    while (holder != null) {
      if (holder.value > maxVal) {
        maxVal = holder.value;
      }
      holder = holder.next;
    }
    return maxVal;
  }
}
var q = new Queue();
q.enqueue(5);
q.enqueue(10);
q.enqueue(50);
q.enqueue(15);

console.log(q.max());
