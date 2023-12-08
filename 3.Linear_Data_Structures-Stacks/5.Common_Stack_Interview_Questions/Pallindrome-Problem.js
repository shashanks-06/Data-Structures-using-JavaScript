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

var reverseString = new Stack();
var testString = "racecar";

for (var i = 0; i < testString.length; i++) {
  reverseString.push(testString.charAt(i));
}

var valid = true;
var i = 0;

while (reverseString.size > 0 && valid) {
  var charVal = reverseString.pop();

  if (charVal != testString.charAt(i)) {
    valid = false;
  }
  i++;
}

console.log(valid);
