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
    } else {
      this.rear.next = inNode;
      this.rear = inNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      var val = this.front.value;
      this.front = this.front.next;
      this.size--;
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
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();

q.dequeue();
q.print();
