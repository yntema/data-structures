var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = list.tail;
    } else {
     list.tail.next = newNode;
     list.tail = newNode;
    }
  };  

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.tail;
    return oldHead.value;
  };

  list.contains = function(target) {
    var check = false;
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        check = true;
      }
      currentNode = currentNode.next;
    }
    return check;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//  addToTail: O(1)
//  removeHead: O(1)
//  contains: O(n)

