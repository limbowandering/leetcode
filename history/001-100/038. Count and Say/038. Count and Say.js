const countAndSay = function(n){
  let s = '1';

  for(let i = 2; i <= n; i++){
    let count = 1, str = '', len = s.length;

    for(let j = 0 ; j < len; j++){
      if(j < len - 1 && s[j] === s[j + 1]){
        count++;
      }else{
        str += `${count}${s[j]}`;
        count = 1;
      }
    }
    s = str;
  }
  return s;
}

function countAndSayTest(n){
  for(let i = 1; i <= n; i++){
    console.log(countAndSay(i));
  }
}

countAndSayTest(14);
