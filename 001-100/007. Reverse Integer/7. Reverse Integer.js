const reverse = function(x){
  let s = String(x);
  let isNegative = false;
  if(s[0] === '-'){
    s = s.substring(1,s.length);
    isNegative = true;
  }
  let s2 = s.split('').reverse().join('');
  let M = Math.pow(2,31);
  while(s2[0] === '0'){
    if(s2.length === 1){
      break;
    }
    s2 = s2.substring(1,s2.length);
  }
  s2 = parseInt(s2);
  if(isNegative){
    if(s2 > M){
      return 0;
    }else{
      return -s2;
    }
  }else{
    if(s2 > M - 1){
      return 0;
    }else{
      return s2;
    }
  }
}

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));
console.log(reverse(0));