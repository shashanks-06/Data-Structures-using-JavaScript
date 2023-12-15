class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(value) {
    var sum = 0;

    for (var i = 0; i < value.length; i++) {
      var charCode = value.charCodeAt(i);
      sum += charCode;
    }
    return sum % this.size;
  }

  add(key, value) {
    var hash = this.calculateHash(key);
    this.values[hash] = value;
  }

  getItem(key) {
    var hash = this.calculateHash(key);
    return this.values[hash];
  }
}

var h = new HashTable(51);

h.add("Hello", "Worlds!");

console.log(h.getItem("Hello"));
