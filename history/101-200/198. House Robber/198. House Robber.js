const rob = function(nums){
  let n = nums.length;
  if(n === 0) return 0;
  if(n === 1) return nums[0];
  let dp = [];
  dp[0] = nums[0];
  dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];
  for(let i = 2; i < n; i++){
    let tmp = dp[i - 2] + nums[i];
    dp[i] = tmp > dp[i - 1] ? tmp : dp[i - 1];
  }
  return dp[n - 1];
};

console.log(rob([1,2,3,1]));