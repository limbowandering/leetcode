
const singleNumber1 = function(nums){

  // wrong. because it cannot handle negative numbers;

  const map = [];
  for(let i = 0; i < nums.length; i++){
    if(map[nums[i]] === undefined){
      map[nums[i]] = 1;
    }else if(map[nums[i]] === 1){
      map[nums[i]]++;
    }
  }
  for(let i = 0; i < map.length;i++){
    if(map[i] === 1){
      return i;
    }
  }
}
const singleNumber2 = function(nums){
  const map = {};
  for(let i = 0; i < nums.length; i++){
    if(map[nums[i]] === undefined){
      map[nums[i]] = 1;
    }else if(map[nums[i]] === 1){
      map[nums[i]]++;
    }
  }
  for(let key in map){
    if(map[key] === 1){
      return Number(key);
    }
  }
}
const singleNumber = function(nums){
  //XOR
  let result = 0;
  for(let i = 0; i < nums.length; i++){
    result = result ^ nums[i];
    console.log(result);
  }
  return result;

  //or in es6
  //return nums.reduce((result, num) => result ^ num, 0);
}

console.log(singleNumber([1,2,1,2,4]));