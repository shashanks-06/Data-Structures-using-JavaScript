//In this exercise, we will see how we can detect if one set is a subset of another.
//A set A is a subset of a set B if every element in A is also in B. For example, [1,2,3] is a
//subset of [1,2,3,4,5], since 1,2, and 3 are contained in [1,2,3,4,5]. To do this, we start
//by iterating our larger array to add all of its values into the hash table. Once this is done,
//we iterate the second array, checking if all values are in the hash table. If any are not,
//it is not a subset. Otherwise, it is a subset. The code for this is shown below.

const map1 = new Map();

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 3, 5];

for (var i = 0; i < arr1.length; i++) {
  if (!map1.has(arr1[i])) {
    map1.set(arr1[i], arr1[i]);
  }
}

var isSubset = true;
var i = 0;

while (i < arr2.length && isSubset) {
  if (!map1.has(arr2[i])) {
    isSubset = false;
  }
  i++;
}

console.log(isSubset);
