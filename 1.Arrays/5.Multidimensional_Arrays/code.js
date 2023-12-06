var arr1 = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < i; j++) {
    const temp = arr1[i][j];
    arr1[i][j] = arr1[j][i];
    arr1[j][i] = temp;
  }
}

console.log(arr1);

// ------------------------------------------------------------------------------------------------

// const products = [
//   ["sugar", "yeast", "eggs"],
//   ["water", "soda", "juice"],
// ];
// products.push(["floor", "salt"]);
// console.table(products);

// ------------------------------------------------------------------------------------------------
