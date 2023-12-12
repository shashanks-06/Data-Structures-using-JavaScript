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

var s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.print();
s.pop();
s.print();
s.pop();
s.print();
s.pop();
s.print();
