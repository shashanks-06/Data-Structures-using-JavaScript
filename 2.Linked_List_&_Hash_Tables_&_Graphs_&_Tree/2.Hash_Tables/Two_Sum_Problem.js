//In this exercise, we will learn an efficent solution to the two sum problem. The two sum problem is a classic algorithms problem where we want to find two values in an array that add to a specific value. For example, suppose we have the array [1,2,2,7] and a target value of 9. We would look for values that add up to 9, trying each value. So 1+2 = 3 is not a solution, 2+2 = 4 is not a solution, but 2+7 = 9 is a solution. Therefore the solution is (2,7).

//To solve this efficently, we slightly change the way the problem is stated. Rather than looking for numbers that sum to a specific value, we determine the value required to reach the sum for a given value. For example, for the value 1, we would need to add 8 to get to 9. For 2, we would need to add 7 to get to 9. We then determine if the value to make the sum work exists in the array. We can efficently implement this with a hash table, as shown below.

const map1 = new Map();
const arr = [1, 2, 2, 7];
var target = 9;

var solution = [];
var i = 0;
var foundPair = false;

while (i < arr.length) {
  map1.set(arr[i], i);
  i++;
}

i = 0;

while (i < arr.length && !foundPair) {
  var compliment = target - arr[i];

  if (map1.has(compliment)) {
    if (i != map1.get(compliment)) {
      solution.push(arr[i]);
      solution.push(arr[map1.get(compliment)]);
      foundPair = true;
    }
  }
  i++;
}

console.log(solution);
