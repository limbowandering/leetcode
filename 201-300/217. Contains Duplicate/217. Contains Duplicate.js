const containsDuplicate = function(nums){
  let set = new Set();
  nums.forEach(e => {
    set.add(e);
  })
  if(set.size !== nums.length){
    return true;
  }else{
    return false;
  }
}
var containsDuplicate2 = function(nums) {
  return (new Set(nums).size !== nums.length);    
};
var containsDuplicate3 = function(nums) {
  const map = {}; // key => number, value => count

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return true
    } else {
      map[nums[i]] = 1
    }
  }

  return false
};

console.log(containsDuplicate([1,2,3,4,1]));