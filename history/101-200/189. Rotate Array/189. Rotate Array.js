const rotate = function(nums, k){
  k %= nums.length;
  for(let i = 0; i < k; i++){
    let t = nums.pop();
    nums.unshift(t);
  }
  return nums;
}

console.log(rotate([1,2,3,4,5,6,7],10));