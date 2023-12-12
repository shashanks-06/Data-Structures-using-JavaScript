arr1 = [1, 2, 3, 4, 5];
val = 1;
count = 0;
var reduceLength = false;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] != val) {
    arr1[count++] = arr1[i];
  } else {
    reduceLength = true;
  }
}

if (reduceLength) {
  arr1.length -= 1;
}

console.log(arr1);

// const products = ["flour","yeast","eggs"];

// const products2 = [...products];
// const products3 = products.slice();
// const products4 = [].concat(products);
// const products5 = Array.from(products);

// console.log(products2);

// const products = ["flour","yeast","eggs"];
// products.length = 1;
// console.log(products);

// const products = ["flour","yeast","eggs"];
// products.length = 4;
// console.log(products);
