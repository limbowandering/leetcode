const maxSubArray1 = function(nums){
  if(nums.length === 0) return 0;
  let ans = nums[0], tmp = nums[0];
  for(let i = 1; i < nums.length; i++){
    tmp = Math.max(tmp+nums[i], nums[i]);
    ans = Math.max(ans,tmp);
  }
  return ans;
}

const maxSubArray = function(nums){
  function MSA(nums, start, end){
    if(start === end){
      return nums[start];
    }
    
    let mid = start + parseInt((end - start) / 2);
    let left = MSA(nums, start, mid);
    let right = MSA(nums, mid+1, end);

    let leftSum = 0;
    let leftMax = Number.MIN_SAFE_INTEGER;
    for(let i = mid; i >= start; i--){
      leftSum += nums[i];
      leftMax = Math.max(leftSum, leftMax);
    }

    let rightSum = 0;
    let rightMax = Number.MIN_SAFE_INTEGER;
    for(let i = mid+1; i <= end; i++){
      rightSum += nums[i];
      rightMax = Math.max(rightSum, rightMax);
    }

    return Math.max(Math.max(left,right), leftMax+rightMax);
  }
  return MSA(nums, 0, nums.length - 1);
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));