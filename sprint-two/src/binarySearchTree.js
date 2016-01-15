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


BinarySearchTree.prototype.contains = function() {

};


BinarySearchTree.prototype.depthFirstLog = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
