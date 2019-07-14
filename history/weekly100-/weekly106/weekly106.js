const sortArrayByParity = function(A){
  let res = [];
  let a = 0, b = 1;
  for(let i = 0; i < A.length; i++){
    if(A[i] % 2 === 0){
      res[a] = A[i];
      a+=2;
    }else{
      res[b] = A[i];
      b+=2;
    }
  }
  return res;
}

// console.log(sortArrayByParity([4,2,5,7]));

const minAddToMakeValid = function(S){
  let arr = [];
  if(S.length === 0){
    return 0;
  }
  arr.push(S[0]);
  for(let i = 1; i < S.length; i++){
    
    if(S[i] === ')'){
      if(arr[arr.length - 1] === '('){
        arr.pop();
      }else{
        arr.push(S[i]);
      }
    }else{
      arr.push(S[i]);
    }
  }
  return arr.length;
}

// console.log(minAddToMakeValid("())"));
// console.log(minAddToMakeValid("((("));
// console.log(minAddToMakeValid("()))(("));

//肯定不是这样啊...
const threeSumMulti1 = function(A, target){
  let res = 0;
  for(let i = 0; i < A.length; i++){
    for(let j = i+1; j < A.length; j++){
      for(let k = j+1; k <A.length; k++){
        if(A[i]+A[j]+A[k] === target){
          res++;
        }
      }
    }
  }
  let t = Math.pow(10,9)+7;
  return res%t;
};

// console.log(threeSumMulti([1,1,2,2,3,3,4,4,5,5],8));
console.log(threeSumMulti([1,1,2,2,2,2],5));

