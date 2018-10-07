function Stack(){
  let items = [];
  this.push = function(element){
    items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function(){
    return items[items.length-1];
  };
  this.isEmpty = function(){
    return items.length === 0;
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };

}

// class Stack{
//   constructor(){
//     this.items = [];
//   }
//   push(element){
//     this.items.push(element);
//   }
// }

function divideBy2(decNumber){
  let remStack = new Stack(),
    rem,
    binaryString = '';
  while(decNumber > 0){
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }
  return binaryString;
};

// console.log(divideBy2(233));

function baseConverter(decNumber, base){
  let remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

  while(decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(1233,16));
