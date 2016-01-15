var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.tail) {
      list.head = newNode;
    } else {
     list.tail.next = newNode;
    }
    list.tail = newNode;
  };  

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.tail;
    return oldHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  list.addToHead = function(value) {

  };

  list.removeTail = function() {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//  addToTail: O(1)
//  removeHead: O(1)
//  contains: O(n)

