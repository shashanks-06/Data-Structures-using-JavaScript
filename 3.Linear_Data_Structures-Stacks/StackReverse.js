class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  push(value) {
    var inNode = new Node(value, this.top);
    this.top = inNode;
    this.size++;
  }

  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      throw "Stack Underflow";
    }
  }

  pop() {
    if (this.size > 0) {
      var retVal = this.top.value;
      this.top = this.top.next;
      this.size--;
      return retVal;
    } else {
      throw "Stack Underflow";
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    var holder = this.top;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

function reverseStack(s) {
  var vals = [];

  while (!s.isEmpty()) {
    vals.push(s.pop());
  }
  for (var i = 0; i < vals.length; i++) {
    s.push(vals[i]);
  }

  return s;
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.print();

s = reverseStack(s);
s.print();
