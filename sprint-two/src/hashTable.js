

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
  this.bucketFind(bucket, k, function(item) {
    item[1] = v;
    exists = true;
  } );
  if(!exists) {
    bucket.push([k, v]);
  }
  this.count++;
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
      item[1] = undefined;
  });
  if (this.count > 0) {
    this.count--;
  }

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
  // input: number
  // copy storage object to oldStorage variable
  var oldStorage = this._storage;
  // create new limited array with size newSize
  this._storage = LimitedArray(newSize);
  // set new limit to newSize
  this._limit = newSize;
  // begin rehash function get new index for each item and insert it in new limited array
  // loop through each bucket in oldStorage array 
  _.each(this._storage, function(bucket) {
    // loop through each tuple in buckets
    _.each(bucket, function(tuple) {
      // add key value pair to new storage using insert method
      if(tuple) {
        this.insert(tuple[0], tuple[1]);
      }
    });
  });
  // output:none
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 // insert: O(1)
 // retrieve: O(1)
 // remove: O(1)


