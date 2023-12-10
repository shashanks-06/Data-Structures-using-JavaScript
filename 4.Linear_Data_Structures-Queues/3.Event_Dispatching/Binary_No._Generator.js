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

function generatePrintBinary(n) {
  var q = new Queue();

  q.enqueue(1);

  while (n--) {
    var s1 = q.dequeue();
    console.log(s1);

    q.enqueue(s1 + "0");
    q.enqueue(s1 + "1");
  }
}

var n = 10;
generatePrintBinary(n);
