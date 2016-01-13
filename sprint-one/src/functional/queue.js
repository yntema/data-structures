var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueSize++;
  };

  someInstance.dequeue = function() {
    queueSize--;
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
