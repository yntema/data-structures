

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];  // key: value = nodeValue : NodeEdges
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (node in this.storage) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.storage[fromNode].indexOf(toNode) > -1); 
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edges = this.storage[fromNode];
  edges.splice(edges.indexOf(toNode), 1);
  edges = this.storage[toNode];
  edges.splice(edges.indexOf(fromNode), 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addNode: O(1)
 // contains: O(1)
 // removeNode: O(1)
 // hasEdge: O(n)
 // addEdge: O(1)
 // removeEdge: O(n)
 // forEachNode: O(n)


