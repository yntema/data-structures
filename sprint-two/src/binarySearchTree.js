var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.left = undefined;
  tree.right = undefined;
  tree.value = value;
  return tree;
};


BinarySearchTree.prototype.insert = function(val) {
  if (val > this.value) { //go right
    if(this.right === undefined) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    if(this.left === undefined) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
};


BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target > this.value) {
    if (this.right === undefined) { 
      return false;
    }
    return this.right.contains(target);
  } else {
    if (this.left === undefined) {
      return false;
    }
    return this.left.contains(target);
  }
};


BinarySearchTree.prototype.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(func);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(func) {
  // create a queue
  var queue = new Queue();

  // add node to queue
  queue.enqueue(this);

  // until the queue is empty
  while (queue.size() > 0) {
    // dequeue a node
    var node = queue.dequeue();
    // run function on node value
    func(node.value);

    // enqueue nodes children
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
 // insert: O(log n) could be n if unbalanced
 // contains: O(log n) could be n if unbalanced
 // depthFirstLog: O(n)
