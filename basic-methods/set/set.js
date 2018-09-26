function Set(){
  let items = {};

  this.add = function(){
    if(!this.has(value)){
      items[value] = value;
      return true;
    }
    return false;
  }

  this.delete = function(){
    if(this.has(value)){
      delete items[value];
      return true;
      //return delete items[value];
    }
    return false;
  }

  this.has = function(value){
    return items.hasOwnProperty(value);
  };

  this.union = function(otherSet){
    let unionSet = new Set();

    let values = this.values();
    for(let i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for(let i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }
    return unionSet;
  }

  this.intersection = function(otherSet){

  }
}

// let a = new Set();
// a.add(1);
// a.add(2);
// a.add(3);
// let b = new Set();
// b.add(1);
// b.add(2);
// b.add(4);
// let c = new Set([x for (x of a) if (b.has(x))]);
// console.log(c);

