

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var exists = false;
  if(bucket === undefined) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      exists = true;
    }
  }
  if(!exists) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  this.bucketFind(bucket, function(item) {
    if(item[0] === k) {
      item[1] = undefined;
    }
  });

  // for (var i = 0; i < bucket.length; i++) {
  //   if (bucket[i][0] === k) {
  //     bucket[i][1] = undefined;
  //   }
  // }
};

HashTable.prototype.bucketFind = function(bucket, func) {
  for (var i = 0; i < bucket.length; i++) {
    func(bucket[i]);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 // insert: O(1)
 // retrieve: O(1)
 // remove: O(1)


