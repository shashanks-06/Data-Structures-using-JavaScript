const nums = [];

for (let i = 0; i <= 100; i++) {
  if (i != 50) {
    nums.push(i);
  }
}

var total = 0;

for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}

console.log(5050 - total);
