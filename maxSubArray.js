var maxSubArray = function(nums) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for(let i = 0, len = nums.length; i < len; i++) {
    sum = sum + nums[i];
    if(sum > maxSum){
        maxSum = sum;
    }
    //当总和为负数的时候，则后续相加必然会减小，所以这边直接清零，从头开始
    if(sum < 0){
        sum = 0;
    }
  }
  return maxSum;
}
