class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(value) {
    return value % this.size;
  }

  add(value) {
    var hash = this.calculateHash(value);

    if (this.values[hash] === undefined) {
      this.values[hash] = value;
    } else {
      var iters = 0;

      while (this.values[hash] !== undefined && iters <= this.size) {
        hash += 1;
        hash = hash % this.size;
        iters += 1;
      }

      if (iters > this.size) {
        throw "StackOverflow";
      } else {
        this.values[hash] = value;
      }
    }
  }

  contains(value) {
    var hash = this.calculateHash(value);

    if (this.values[hash] === value) {
      return true;
    } else {
      var iters = 0;

      while (this.values[hash] != value && iters <= this.size) {
        hash += 1;
        hash = hash % this.size;
        iters += 1;
      }

      if (this.values[hash] == value) {
        return true;
      } else {
        return false;
      }
    }
  }

  print() {
    console.log(this.values);
  }
}

var arr = [1, 2, 2, 3, 3, 4, 4, 5, 6, 6];
var h = new HashTable(251);
var retArr = [];

for (var i = 0; i < arr.length; i++) {
  var v = arr[i];

  if (!h.contains(v)) {
    h.add(v);
    retArr.push(v);
  }
}
console.log(retArr);
