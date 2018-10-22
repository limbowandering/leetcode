const reverseBits = function(n){
  return parseInt(n.toString(2).split('').reverse().join('').padEnd(32,'0'),2);
};

console.log(reverseBits(43261596));