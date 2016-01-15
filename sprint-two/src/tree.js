var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var doesContain = false;
  if(this.value === target) {
    return true;
  } else {
    for(var i = 0; i < this.children.length; i++) {
      if(doesContain === false) {
        doesContain = this.children[i].contains(target);
      }
    }
  }
  return doesContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild: O(1)
// contains: O(n)