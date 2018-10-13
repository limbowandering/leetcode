const firstUniqChar1 = function(s){
  if(s.length === 1){
    return 0;
  }
  let arr = [];
  for(let i = 0; i < s.length; i++){
    let flag = true;
    for(let j = 0; j < s.length; j++){
      if(s[j] === s[i] && i !== j){
        flag = false;
      }
    }
    if(flag){
      arr.push(i);
    }
  }
  if(arr.length === 0){
    return -1;
  }else{
    return arr[0];
  }
};

const firstUniqChar = function(s){
  let arr = {};
  for(let i = 0; i < s.length; i++){
    console.log(arr[s[i]]);
    if(arr[s[i]]){
      arr[s[i]]++;
    }else{
      arr[s[i]] = 1; 
    }
  }
  let keys = Object.keys(arr);
  for(let i = 0; i < keys.length; i++){
    if(arr[keys[i]] === 1) return keys[i];
  }
  return -1;
}

console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));
// console.log(firstUniqChar("cc"));
// console.log(firstUniqChar("aadadaad"));