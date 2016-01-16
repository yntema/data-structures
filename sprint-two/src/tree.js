var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value); 
  child.parent = this;
  this.children.push(child);
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

treeMethods.removeFromParent = function() {
  // get parent using parent property
  var parentTree = this.parent;
  // find this in parent's children array
  // splice out of children array
  parentTree.children.splice(parentTree.children.indexOf(this), 1);

  // set parent to null
  this.parent = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild: O(1)
// contains: O(n)

// Add parent links to your tree

//  A .parent property, which refers to the parent node or null when there is no node
//  A .removeFromParent() method, which disassociates the tree with its parent (in both directions)