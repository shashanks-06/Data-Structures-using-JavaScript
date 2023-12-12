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

  search(val) {
    var index = -1;
    var found = false;
    var holder = this.top;

    while (!found && holder != null) {
      if (holder.value === val) {
        found = true;
      }
      holder = holder.next;
      index++;
    }

    if (!found) {
      return -1;
    } else {
      return index;
    }
  }
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log(s.search(2));
console.log(s.search(5));
