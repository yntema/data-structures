var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.left = undefined;
  tree.right = undefined;
  tree.value = undefined;
  return tree;
};


BinarySearchTree.prototype.insert = function(val) {
  if (this.value === undefined) {
    this.value = val;
  }
};


BinarySearchTree.prototype.contains = function() {

};


BinarySearchTree.prototype.depthFirstLog = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
