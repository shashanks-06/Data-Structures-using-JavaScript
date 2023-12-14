class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null, null);
    this.rear = new Node(null, null, null);
    this.size = 0;
  }

  insertFront(val) {
    var nodeIn = new Node(val, null, null);

    if (this.size == 0) {
      this.front = this.rear = nodeIn;
    } else {
      nodeIn.next = this.front;
      this.front.prev = nodeIn;

      this.front = nodeIn;
    }

    this.size++;
  }

  insert(val, index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.insertFront(val);
      } else {
        var i = 0;
        var holder = this.front;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }

        var newNode = new Node(val, holder.next, holder);

        if (holder.next != null) {
          holder.next.prev = newNode;
        }

        holder.next = newNode;

        this.size++;
      }
    }
  }
  deleteFront() {
    this.front = this.front.next;
    this.size--;
  }

  delete(index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.deleteFront();
      } else {
        var i = 0;
        var holder = this.front;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }

        holder.next.next.prev = holder;
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }

  print() {
    var holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  printReverse() {
    var holder = this.rear;

    while (holder != null) {
      console.log(holder.value);
      holder = holder.prev;
    }
  }

  contains(val) {
    var frontHolder = this.front;
    var rearHolder = this.rear;

    var left = 0;
    var right = this.size - 1;

    var found = false;

    while (!found && left < right) {
      if (frontHolder.value === val || rearHolder.value === val) {
        found = true;
      }

      left++;
      right--;
      frontHolder = frontHolder.next;
      rearHolder = rearHolder.prev;
    }
    return found;
  }
}

var list = new LinkedList();

list.insertFront(1);
list.insertFront(2);
list.insertFront(3);
list.insertFront(4);
list.insertFront(5);
list.insertFront(6);

console.log(list.contains(4));

console.log(list.contains(6));
console.log(list.contains(10));
