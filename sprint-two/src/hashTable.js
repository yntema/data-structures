

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (this.count / this._limit >= 0.75) {
    // resize array
    this.resize(this._limit*2);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var exists = false;
  if(bucket === undefined) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }
  exists = this.bucketFind(bucket, k, function(item) {
    item[1] = v;
    return true;
  } );
  if(!exists) {
    bucket.push([k, v]);
    this.count++;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  return this.bucketFind(bucket, k, function(item) {
    return item[1];
  });
};

HashTable.prototype.remove = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  this.bucketFind(bucket, k,  function(item) {
    bucket.splice(bucket.indexOf(item), 1);
    if (this.count > 0) {
      this.count--;
    }
  }.bind(this));

  if (this.count / this._limit < 0.25) { // maybe <= ???
    // resize array
    this.resize(Math.floor(this._limit/2));
  }
};

HashTable.prototype.bucketFind = function(bucket, key, func) {
  if(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if(bucket[i] && bucket[i][0] === key) {
        return func(bucket[i]);
      }
    }    
  }
};

HashTable.prototype.resize = function(newSize) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newSize);
  this._limit = newSize; 
  this.count = 0;
  oldStorage.each(function(bucket) {
    _.each(bucket, function(tuple) {
      if(tuple) {
        this.insert(tuple[0], tuple[1]);
      }
    }.bind(this));
  }.bind(this));
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 // insert: O(1)
 // retrieve: O(1)
 // remove: O(1)


