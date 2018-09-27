function Queue(){
  let items = [];
  this.enqueue = function(element){
    items.push(element);
  };
  this.dequeue = function(element){
    return items.shift();
  };
  this.front = function(){
    return items[0];
  };
  this.isEmpty = function(){
    return items.length === 0;
  };
  
}

const plusOne = function(digits){
  return (parseInt(digits.join(''))+1).toString().split('').map(e=> parseInt(e));
}

// console.log(plusOne([1,2,3]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));