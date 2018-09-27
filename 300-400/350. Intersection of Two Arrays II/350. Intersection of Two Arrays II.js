//totally wrong. fuck off
const intersect2 = function(nums1, nums2){
  let res = [];
  let ret = [];
  for(let i = 0; i < nums1.length; i++){
    for(let j = 0; j < nums2.length; j++){
      if(nums1[i] === nums2[j]){
        res.push(nums1[i]);
        break;
      }
    }
  }
  for(let i = 0; i < nums2.length; i++){
    for(let j = 0; j < res.length; j++){
      if(nums2[i] === res[j]){
        ret.push(nums2[i]);
        break;
      }
    }
  }
  return ret;
}

const intersect = function(nums1, nums2){
  let arr = [];
  while(nums2.length > 0){
    let tmp = nums2.pop();
    if(nums1.indexOf(tmp) > -1){
      let indexTmp = nums1.indexOf(tmp);
      nums1.splice(indexTmp,1);
      arr.push(tmp);
    }
  }
  return arr;
}

console.log(intersect([1,2,2,1],[2,2]));
console.log(intersect([4,9,5],[9,4,9,8,4]));