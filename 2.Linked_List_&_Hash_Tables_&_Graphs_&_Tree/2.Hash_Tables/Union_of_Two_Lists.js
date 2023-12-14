const map1 = new Map();

var union = [];
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 2, 4, 6, 8, 10];

for (var i = 0; i < arr1.length; i++) {
  if (!map1.has(arr1[i])) {
    map1.set(arr1[i], arr1[i]);
    union.push(arr1[i]);
  }
}

for (var i = 0; i < arr2.length; i++) {
  if (!map1.has(arr2[i])) {
    map1.set(arr2[i], arr2[i]);
    union.push(arr2[i]);
  }
}

console.log(map1);
