const numUniqueEmails2 = function(emails){
  const emailFilter = function(str){
    let index = str.search(/@/);
    let s = str.substring(0,index);
    let s2 = str.substring(index+1,str.length);
    let res = '';
    for(let i = 0; i < s.length; i++){
      if(s[i] === '+') break;
      if(s[i] === '.') continue;
      res = res+s[i];
    }
    return res+s2;
  }

  let arr = [];
  for(let i = 0; i < emails.length; i++){
    let t = emailFilter(emails[i]);
    if(arr.indexOf(t) === -1){
      arr.push(t);
    }
  }
  return arr.length;
};

const numUniqueEmails = function(emails){
  let arr = emails.map(str=>{
    let index = str.search(/@/);
    let s = str.substring(0,index);
    let s2 = str.substring(index+1,str.length);
    let res = '';
    for(let i = 0; i < s.length; i++){
      if(s[i] === '+') break;
      if(s[i] === '.') continue;
      res = res+s[i];
    }
    return res+s2;
  });
  let set = new Set(arr);
  return set.size;
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));

const numSubarrayWithSum = function(A,S){
  let count = 0;
  for(let i = 0; i < A.length; i++){
    if(A[i] === 1) count++;
  }
  if(S>count) return 0;
  let count2 = 0;
  let res = 0;
  for(let i = 0; i < A.length; i++){
    if(S > count- count2) break;
    let t = 0;
    for(let j = i; j < A.length; j++){
      t += A[j];
      if(t === S){
        res++;
        for(let k = j+1; k < A.length; k++){
          if(A[k] === 0) res++;
          else break;
        }
        break;
      }
    }
    if(A[i] === 1) count2++;
  }
  return res;
};

// console.log(numSubarrayWithSum([1,0,1,0,1],2));
// console.log(numSubarrayWithSum([0,0,0,0,0],0));

// 我在想什么 这题怎么能排序呢????
const minFallingPathSum2 = function(A){
  let res = 0;
  for(let i = 0; i < A.length; i++){
    A[i].sort((a,b)=>(a>b));
    res+=A[i][0];
  }
  return res;
}

//不对 错了...
const minFallingPathSum3 = function(A){
  let res = [];
  for(let i = 0; i < A.length; i++){
    let index = i;
    let t = A[0][i];
    for(let j = 1; j < A.length; j++){
      let tindex = index-1;
      let min = A[j][index-1];
      if( min === undefined){
        min = A[j][index];
        tindex = index;
      }
      if(min > A[j][index]){
        min = A[j][index];
        tindex = index;
      }
      if(min > A[j][index+1]){
        min = A[j][index+1];
        tindex = index+1;
      }
      index = tindex;
      t+=min;
    }
    res.push(t);
  }
  res.sort((a,b)=>a>b);
  return res[0];
}



// console.log(minFallingPathSum([[-51,-35,74],[-62,14,-53],[94,61,-10]]));
// console.log(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(minFallingPathSum([[10,-98,44],[-20,65,34],[-100,-1,74]]));
// console.log(minFallingPathSum([[-80,-13,22],[83,94,-5],[73,-48,61]]));


const beautifulArray = function(N){
  if(N === 1) {
    return [1];
  }
  else{
    let l = beautifulArray(Math.floor(N/2));
    let r = beautifulArray(N-Math.floor(N/2));
    l = l.map(item=>item*2);
    r = r.map(item=>item*2-1);
    return [...l,...r];
  }
};

// console.log(beautifulArray(4));
// console.log(beautifulArray(5));