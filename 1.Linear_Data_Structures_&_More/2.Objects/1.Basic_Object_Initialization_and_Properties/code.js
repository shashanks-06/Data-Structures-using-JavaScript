//Exercise Code

const user = {
  username: "username",
  password: "password",
  firstName: "firstName",
  lastName: "lastName",
};

for (property in user) {
  console.log(user[property]);
}

//------------------------------------------------------------//

// First Way of Object Declaration

// const products = new Object();

// products.productName = "Computer";
// products.price = "$ 500";

//-----------------------------------------------------------//

// Second Way of Object Declaration

// const products = {
//   productName: "Computer",
//   price: "$ 500",
// };

// products.productName = "Laptop";
// console.log(products.productName);

//console.log(products);

//-----------------------------------------------------------//
// for (property in products) {
//   console.log(property);
//   console.log(products[property]);
// }
