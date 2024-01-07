class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  inOrderRec(node) {
    if (node != null) {
      this.inOrderRec(node.left);
      console.log(node.data);
      this.inOrderRec(node.right);
    }
  }

  inOrder() {
    this.inOrderRec(this.root);
  }
}

var t = new Bst();
t.insert(10);
t.insert(5);
t.insert(15);

t.inOrder();
