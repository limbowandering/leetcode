
const plusOne = function(digits){
  return (parseInt(digits.join(''))+1).toString().split('').map(e=> parseInt(e));
}

// console.log(plusOne([1,2,3]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

//to be continued

const plusOne1 = function(digits){
  return (parseInt(digits.join(''))+1).toString().split('').map(e=> parseInt(e));
}

const plusOne = function(digits){
  
  let d = parseInt(digits[digits.length-1]);
  if(d === 9){
    let arr = digits.slice();
    let t1 = arr.splice(arr.length-1,1);
    let t2 = arr.splice(arr.length-1,1);
    let t = parseInt(t2+t1)+1;
    let str = arr.join('');
    return (str+t).split('').map(e=>parseInt(e));
  }else{
    let arr = digits.slice();
    let t = parseInt(arr.splice(arr.length-1,1))+1;
    let str = arr.join('');
    return (str+t).split('').map(e=>parseInt(e));
  }
}

// console.log(plusOne([1,2,3]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(plusOne([2,9]));

const plusOne = function(digits){
  for(let i = digits.length - 1; i >= 0; i--){
    if(digits[i] === 9){
      digits[i] = 0;
    }else{
      digits[i] += 1;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));