const user = {
  username: "username",

  get name() {
    return this.username;
  },

  set name(nameIn) {
    this.username = nameIn;
  },

  password: "password",
  firstName: "firstName",
  lastName: "lastName",

  printUser: function () {
    console.log(
      this.username +
        "," +
        this.password +
        "," +
        this.firstName +
        "," +
        this.lastName
    );
  },
};

user.printUser();

//--------------------------------------------//

// const product = {
//   productName: "Computer",

//   get prod() {
//     return this.productName;
//   },

//   set prod(prod) {
//     if (prod != "") {
//       this.productName = prod;
//     }
//   },
// };
