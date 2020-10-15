// 146. LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
//
// Implement the LRUCache class:
//
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?
//
// Example 1:
//
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]
//
// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


let LRUCache = function(capacity) {
  this.cache = new Map(); // map is an ordered dict; keeps all the unique keys; perfect to keep track of unique node;
  this.capacity = capacity || 3; // max size of the cache;
}

LRUCache.prototype.get = function(key) {
  if(!this.cache.get(key)) return -1;

  let val = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, val);
  return this.cache.get(key);
}

LRUCache.prototype.put = function(key, value) {
  this.cache.delete(key); // in case there is already a pair with the same key;
  this.cache.set(key, value);
  if(this.capacity < this.cache.size) {
    this.cache.delete(Array.from(this.cache.keys())[0]);
  }
  return this.cache.get(key);
}

































// let LRUCache = function(capacity) {
//
// }
//
// LRUCache.prototype.get = function(key) {
//
// }
//
// LRUCache.prototype.put = function(key, val) {
//
// }
//
