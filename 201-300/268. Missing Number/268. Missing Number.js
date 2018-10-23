const missingNumber = function(nums){
  return (1 + nums.length)*nums.length/2 - nums.reduce((prev,cur)=>prev+=cur, 0);
}

console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));