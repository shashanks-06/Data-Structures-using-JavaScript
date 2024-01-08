//In this exercise, we will see how to determine the height of a tree. The height of a tree is the maximum number of nodes between the root and the furthest possible child node. To do this, we can use the following steps:

// 1. If the node is null, we return -1 as there is no value
// 2. Recursively call with the left and right nodes, checking if the left or right segment is larger. Return the largest one as a result.
// The code below shows how this is implemented.

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
  //----------------------------PART ONE------------------------------------//

  //----- INSERTION -----//

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

  //----------------------------PART TWO------------------------------------//

  containsRec(node, data) {
    if (node == null) {
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
    if (node.left == null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  //----- DELETION -----//

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
      //Once Iteration is finished, we should return back node that we ended up at.So, this allows to facilitate the actual deletion afterwords.
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      if (node.left == null) {
        node = node.right;
        return node;
      }
      if (node.right == null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;
      //To replace thing we're trying to delete with smallest possible value from R.H.S. . Thus, it will follow property on both sides.

      node.right = this.removeNode(node.right, aux.data);
      return node;
      //we swapped the smallest node with the one we're deleting
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
}

function height(node) {
  if (node == null) {
    return -1;
  } else {
    let lDepth = height(node.left);
    let rDepth = height(node.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
  }
}

var tree1 = new Bst();
tree1.insert(5);
tree1.insert(2);
tree1.insert(7);
tree1.insert(4);
tree1.insert(1);

console.log(height(tree1.root));
