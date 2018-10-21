const isLongPressedName = function(name, typed) {
  let i = 0, j = 0, result = true;
  while(i < name.length && j < typed.length){
    let t1 = name[i], count1 = 1;
    while(t1 === name[++i]){
      count1++;
    }
    let count2 = 0;
    while(typed[j] === t1){
      count2++;
      j++;
    }
    if(count2 < count1){
      result = false;
      break;
    }
  }
  if(i < name.length && j === typed.length) result = false;
  return result;
};

// console.log(isLongPressedName('alex','aaleex'));
// console.log(isLongPressedName('saeed','ssaaedd'));
// console.log(isLongPressedName('leelee','lleeelee'));
// console.log(isLongPressedName('laiden','laiden'));
// console.log(isLongPressedName('pyplrz','ppyypllr'));
// console.log(isLongPressedName('pr','p'));


const minFlipsMonoIncr = function(S){
let n = S.length;
let f = [];
for(let i = 0 ; i < n+1; i++){
  f.push(0);
}
for(let i = 0; i < n; i++){
  f[i+1] = f[i] + (S[i] === '1');
}
// console.log(f);
let ans = n;
for(let i = 0; i <= n; i++){
  let a = f[i];
  let b = (n - i) - (f[n] - f[i]);
  ans = Math.min(ans, b+a);
}
return ans;
};
console.log(minFlipsMonoIncr('00110'));
console.log(minFlipsMonoIncr('010110'));
s