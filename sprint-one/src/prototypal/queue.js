var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.storage = {};
  newQueue.front = 0;
  return newQueue; 
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;
};

queueMethods.enqueue = function(value) {
  this.storage[this.queueSize + this.front] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    this.queueSize--;
  }
  var result = this.storage[this.front];
  this.front++;
  return result;
};