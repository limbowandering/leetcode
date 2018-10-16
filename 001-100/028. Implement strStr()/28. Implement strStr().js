const strStr = function(haystack, needle){
  if(needle.length === 0) return 0;
  let reg = new RegExp(needle);
  return haystack.search(reg);
}

console.log(strStr("hello","ll"));
console.log(strStr('aaaaa','bba'));