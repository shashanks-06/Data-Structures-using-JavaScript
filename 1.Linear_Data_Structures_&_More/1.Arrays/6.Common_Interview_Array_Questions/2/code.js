const nums = [23, 45, 17, 1, 8, 39, 99, 55];
var maxVal = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (maxVal < nums[i]) {
    maxVal = nums[i];
  }
}
console.log(maxVal);
