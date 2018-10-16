const myAtoi = function(str){
  let isNegative = false;
  let notFirstChar = true;
  let res = '';
  let beforeFlag = true;
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      if(notFirstChar){
        continue;
      }
    }
    if(notFirstChar){
      if(str[i] === '-'){
        isNegative = true;
        notFirstChar = false;
        continue;
      }
      if(str[i] === '+'){
        notFirstChar = false;
        continue;
      }
      if(str[i] >= '0' && str[i] <= '9'){
        i--;
        notFirstChar = false;
        continue;
      }
      return 0;
    }else{
      if(str[i] === '0' && beforeFlag) continue;
      if(str[i] >= '0' && str[i] <= '9'){
        res+=str[i];
        beforeFlag = false;
      }else{
        break;
      }
    }
  }
  if(res.length){
    if(res.length > 10){
      if(isNegative){
        return -Math.pow(2,31);
      }else{
        return Math.pow(2,31) - 1;
      }
    }
    res = parseInt(res);
    if(isNegative){
      if(res > Math.pow(2,31)){
        return -Math.pow(2,31);
      }else{
        return -res;
      }
    }else{
      if(res > Math.pow(2,31) - 1){
        return Math.pow(2,31) - 1;
      }else{
        return res;
      }
    }
  }
  return 0;
}

console.log(myAtoi('42'));
console.log(myAtoi('      -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91232123212'));
console.log(myAtoi("  0000000000012345678"));
console.log(myAtoi('010'));