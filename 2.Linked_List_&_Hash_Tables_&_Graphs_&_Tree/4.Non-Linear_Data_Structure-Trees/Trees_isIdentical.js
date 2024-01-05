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
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  inorderRec(node) {
    if (node !== null) {
      this.inorderRec(node.left);
      console.log(node.data);
      this.inorderRec(node.right);
    }
  }

  inOrder() {
    this.inorderRec(this.root);
  }

  containsRec(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.containsRec(node.left, data);
    } else if (data > node.data) {
      return this.containsRec(node.right, data);
    } else {
      return true;
    }
  }

  contains(data) {
    return this.containsRec(this.root, data);
  }
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
}

// In this exercise, we will see how to check if two trees are identical to each other. This process involves iterating both trees to determine if they completely match. There are a few cases to handle for this:

// 1. The base case is that both nodes are null. This indicates we have reached the end of a tree branch, so we can return true
// 2. The main recursive case, in which we compare the value of the current node, a recursive call to the left, and a recursive call to the right to verify that they all match
// 3. The case where values do not match, in which case we return false
// The resulting code is shown below.

function isIdentical(a, b) {
  if (a == null && b == null) {
    return true;
  }

  if (a != null && b != null) {
    return (a.data =
      b.data && isIdentical(a.left, b.left) && isIdentical(a.right, b.right));
  }
  return false;
}

var tree1 = new Bst();
tree1.insert(1);
tree1.insert(2);
tree1.insert(3);
tree1.insert(4);
tree1.insert(5);

var tree2 = new Bst();
tree2.insert(1);
tree2.insert(2);
tree2.insert(3);
tree2.insert(4);
tree2.insert(5);

console.log(isIdentical(tree1.root, tree2.root));

tree2.remove(5);

console.log(isIdentical(tree1.root, tree2.root));
