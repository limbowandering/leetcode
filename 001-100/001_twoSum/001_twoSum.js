// const twoSum = function (nums, target) {
//   let res = [];
//   nums.forEach((elem, index, arr) => {
//     arr.forEach((e, i) => {
//       if (index !== i) {
//         if (target === elem + e) {
//           res.push(index);
//           res.push(i);
//         }
//       }
//     })
//   })
//   return res.slice(0, 2);
// }

// const twoSum = function(nums, target){
//   let length = nums.length;
//   for(let i = 0; i < length; i++){
//     for(let j = i+1; j < length; j++){
//       if(nums[i] + nums[j] === target){
//         let res = [];
//         res.push(i);
//         res.push(j);
//         return res;
//       }
//     }
//   }
// }

var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]], i]
    } else {
      map[target - nums[i]] = i
    }
  }  
};

console.log(twoSum([2, 7, 8, 11], 9));