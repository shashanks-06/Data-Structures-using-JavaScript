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

//In this exercise, we will see how to mirror a tree. A mirrored tree swaps all of the left pointers with right pointers, and all of the right pointers with left pointers. The code for this involves iterating the left and right of the tree, swapping pointers as we go. The code for this is shown below.

function mirror(node) {
  if (node == null) {
    return node;
  }
  let left = mirror(node.left);
  let right = mirror(node.right);

  node.left = right;
  node.right = left;

  return node;
}

var tree1 = new Bst();
tree1.insert(5);
tree1.insert(2);
tree1.insert(7);
tree1.insert(4);
tree1.insert(1);

tree1.inOrder();

mirror(tree1.root);

tree1.inOrder();
