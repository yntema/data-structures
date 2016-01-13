var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  var front = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize + front] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    if (queueSize > 0) {
      queueSize--;
    }
    var result = storage[front];
    front ++;
    return result;
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
