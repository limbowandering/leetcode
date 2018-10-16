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
  this.size = function(){
    return items.length;
  }
  this.print = function(){
    console.log(items.toString);
  }
}

function PriorityQueue(){
  let items = [];
  function QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }


}