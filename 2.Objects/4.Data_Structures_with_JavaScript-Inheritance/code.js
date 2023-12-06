class User {
  constructor() {
    this.username = "";
    this.passsword = "";
    this.firstName = "";
    this.lastName = "";
  }
}

class SuperUser extends User {
  constructor() {
    super();
    this.admin = 1;
  }
}

var user = new SuperUser();
user.username = "Admin";
console.log(user.username);
console.log(user.admin);

//-----------------------------------------------------//

// class Transportation {
//   constructor() {
//     this.typeName = "";
//     this.wheels = 0;
//     this.maxSpeed = 0;
//   }
// }

// class Car extends Transportation {
//   constructor() {
//     super();
//     this.fuel = 0;
//   }
// }

// var car1 = new Car();
// car1.typeName = "Car";
// car1.wheels = 4;
// car1.maxSpeed = 200;
// car1.fuel = 40;

// console.log(car1);
