class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  size() {
    return this.stack.length;
  }

  push(val) {
    this.stack.push(val);
  }

  pop(val) {
    if (this.stack.length > 0) {
      return this.stack.pop(val);
    } else {
      throw "Stack UnderFlow";
    }
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      throw "Stack UnderFlow";
    }
  }

  print() {
    console.log(this.stack);
  }
}

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(val) {
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(val);

    while (!this.s2.isEmpty()) {
      this.s1.push(this.s2.pop());
    }
  }

  dequeue() {
    return this.s1.pop();
  }

  print() {
    console.log(this.s1);
  }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();

q.dequeue();
q.print();
