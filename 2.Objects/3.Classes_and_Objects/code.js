class User {
  constructor() {
    this.username = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
  }
  printProduct() {
    console.log(
      this.username +
        " " +
        this.password +
        " " +
        this.firstName +
        " " +
        this.lastName
    );
  }
}

var user = new User();
user.username = "username";
user.password = "password";
user.firstName = "firstName";
user.lastName = "lastName";

user.printProduct();

// class Product {
//   constructor() {
//     this.productName = "";
//     this.price = 0;
//   }

//   printProduct() {
//     console.log(this.productName + " " + this.price);
//   }
// }

// var prod1 = new Product();
// var prod2 = new Product();

// prod1.productName = "Computer";
// prod1.price = "$ 599.99";
// prod1.printProduct();

// prod2.productName = "Laptop";
// prod2.price = "$ 699.99";
// prod2.printProduct();
