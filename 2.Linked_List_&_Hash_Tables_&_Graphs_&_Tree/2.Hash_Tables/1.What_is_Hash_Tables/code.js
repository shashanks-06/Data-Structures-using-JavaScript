//Counting the number of occurrences of values in array

const map1 = new Map();

const arr = [1, 4, 3, 2, 5, 1, 4, 2, 3, 1, 5, 1, 3, 2];

for (var i = 0; i < arr.length; i++) {
  if (map1.has(arr[i])) {
    map1.set(arr[i], map1.get(arr[i]) + 1);
  } else {
    map1.set(arr[i], 1);
  }
}

console.log(map1);
