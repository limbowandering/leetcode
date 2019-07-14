const hammingWeight2 = function(n){
  let str = n.toString(2), count = 0;
  for(let i = 0 ; i < str.length; i++){
    if(str[i] === '1') count++;
  }
  return count;
};

const hammingWeight = function(n){
  let result = 0;
  while(n){
    result += n & 1;
    n = n >>> 1;
  }
  return result;
}

console.log(hammingWeight(11));
console.log(hammingWeight(128));