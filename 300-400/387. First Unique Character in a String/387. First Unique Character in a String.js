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

//能通过 但是写的不好
const firstUniqChar2 = function(s){
  let arr = {};
  for(let i = 0; i < s.length; i++){
    // console.log(arr[s[i]]);
    if(arr[s[i]]){
      arr[s[i]]++;
    }else{
      arr[s[i]] = 1; 
    }
  }
  let keys = Object.keys(arr);
  for(let i = 0; i < keys.length; i++){
    if(arr[keys[i]] !== 1){
      keys.splice(i,1);
      i--;
    }
  }
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < keys.length; j++){
      if(s[i] === keys[j]){
        return i;
      }
    }
  }
  return -1;
}

const firstUniqChar = function(s){
  let hashTable = {};
  let arr = [];

  for(let i = 0; i < s.length; i++){
    let c = s.charAt(i);
    if(!hashTable.hasOwnProperty(c)){
      hashTable[c] = i;
      arr.push(i);
    }else{
      if(hashTable[c] !== null){
        let val = hashTable[c];
        let index = arr.indexOf(val);
        arr.splice(index,1);
        hashTable[c] = null;
      }
    }

  }

  return arr.length ? arr[0] : -1;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("cc"));
console.log(firstUniqChar("aadadaad"));

