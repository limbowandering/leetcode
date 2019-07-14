const maxArea2 = function(height){
  let result = 0;
  for(let i = 0; i < height.length; i++){
    for(let j = i + 1; j < height.length; j++){
      result = Math.max(result, Math.min(height[i],height[j])*(j-i));
    }
  }
  return result;
};

const maxArea = function(height){
  let result = 0, l = 0, r = height.length - 1;
  while(l < r){
    result = Math.max(result, Math.min(height[l],height[r])*(r-l));
    height[l] < height[r] ? l++ : r--;
  }
  return result;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([2,1]));