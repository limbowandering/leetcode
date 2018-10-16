let numbers = [0,1,2,3,4,5,6];
numbers.push(7);
numbers.unshift(-1);
numbers.pop();
numbers.shift();
numbers.splice(5,1);
console.log(numbers);

// concat
// every
// filter
// forEach 
// join
// indexOf
// lastIndexOf
// map  reduce
// reverse
// slice 
// some 
// sort 
// toString 
// valueOf

let friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age:20},
  {name: 'Chris', age: 25}
]

function comparePerson(a,b){
  if(a.age < b.age){
    return -1;
  }
  if(a.age > b.age){
    return 1;
  }
  return 0;
}

friends.sort(comparePerson);

console.log(friends);

let str = ['Ana','John','ana','john'];

function compareString(a,b){
  if(a.toLowerCase() < b.toLowerCase()){
    return -1;
  }
  if(a.toLowerCase() > b.toLowerCase()){
    return 1;
  }
  return 0;
}

console.log(str.sort(compareString));