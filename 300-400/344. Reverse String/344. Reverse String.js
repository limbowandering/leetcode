const reverseString = function(s){
  // let arr = s.split('');
  // arr = arr.reverse();
  // return arr.join('');
  return s.split('').reverse().join('');
}

console.log(reverseString('hello'));
