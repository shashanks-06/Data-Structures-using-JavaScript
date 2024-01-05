//In this exercise, you will use recursion to calculate the factorial of a number. The factorial of the number x, notated as x! is defined as: x! = x*(x-1)*(x-2)*…*1. Since this relies on previous values in the computation, recursion is a good fit for the implementation. The recursion will have the following cases:

//The base case is when the value is equal to 1, this is where recursion ends
// If we are not on the base case, we compute x*factorial(x-1)
// The resulting code is shown below.

function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
console.log(factorial(3));
