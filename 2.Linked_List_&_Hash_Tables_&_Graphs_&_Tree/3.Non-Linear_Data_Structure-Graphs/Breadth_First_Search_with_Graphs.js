class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      var currSet = this.adjList.get(node);
      currSet.add({ adj, weight });
      this.adjList.set(node, currSet);
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
    }
  }

  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);
    if (adj != node) {
      this.addEdgeHelper(adj, node, weight);
    }
  }

  getEdges(node) {
    return this.adjList.get(node);
  }

  print() {
    console.log(this.adjList);
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(val) {
    var inNode = new Node(val, null);

    if (this.size == 0) {
      this.front = this.rear = inNode;
      this.size++;
    } else {
      this.rear.next = inNode;
      this.rear = inNode;
      this.size++;
    }
  }

  dequeue() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      var val = this.front.value;
      this.front = this.front.next;
      this.size--;
      return val;
    }
  }

  peek() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    var holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

function bfs(g, start) {
  var explored = [];
  var q = new Queue();

  explored.push(start);
  q.enqueue(start);

  while (!q.isEmpty()) {
    var v = q.dequeue();
    console.log(v);

    if (v) {
      var adj = Array.from(g.getEdges(v));
      for (var i = 0; i < adj.length; i++) {
        if (!explored.includes(adj[i].adj)) {
          explored.push(adj[i].adj);
          q.enqueue(adj[i].adj);
        }
      }
    }
  }
}

var g = new Graph();
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 4);

bfs(g, 1);
