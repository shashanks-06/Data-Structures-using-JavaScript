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

  push(val) {
    var inNode = new Node(val, this.top);
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

  inEmpty() {
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

var undoStack = new Stack();
var redoStack = new Stack();
var counter = 0;

function incrementCounter() {
  undoStack.push(counter);
  counter++;
  document.getElementById("val").value = counter;
}

function undo() {
  redoStack.push(counter);
  counter = undoStack.pop();
  document.getElementById("val").value = counter;
}

function redo() {
  undoStack.push(counter);
  counter = redoStack.pop();
  document.getElementById("val").value = counter;
}
