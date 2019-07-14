const strStr2 = function(haystack, needle){
  if(needle.length === 0) return 0;
  let reg = new RegExp(needle);
  return haystack.search(reg);
}

const strstr = function(haystack, needle){
  if(!needle) return 0;
  
}

console.log(strStr("hello","ll"));
console.log(strStr('aaaaa','bba'));