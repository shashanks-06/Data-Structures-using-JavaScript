const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDup = [];

for (let i = 0; i < arr1.length; i++) {
  if (i < arr1.length - 1) {
    if (arr1[i] != arr1[i + 1]) {
      removeDup.push(arr1[i]);
    }
  } else {
    removeDup.push(arr1[i]);
  }
}

console.log(arr1);

console.log(removeDup);

// const products = ["flour", "yeast", "eggs"];
// const nums = [1, 2, 3, 4];

// products.forEach(printProducts);

// const newNums = nums.map(addOne);
// console.log(newNums);

// const filteredNums = nums.filter(lessThree);
// console.log(filteredNums);

// const sumNums = nums.reduce(sumAll);
// console.log(sumNums);

// //Functions
// function printProducts(value, index, array) {
//   console.log(value);
// }

// function addOne(value, index, array) {
//   return value + 1;
// }

// function lessThree(value, index, array) {
//   return value < 3;
// }

// function sumAll(total, value, index, array) {
//   return total + value;
// }
