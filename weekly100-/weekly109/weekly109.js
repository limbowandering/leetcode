
var RecentCounter = function() {
  this.arr = [];
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  if(this.arr.length === 0){
    this.arr.push(t);
    return 1;
  }else{
    if(t - this.arr[0] <= 3000){
      this.arr.push(t);
      return this.arr.length;
    }else{
      for(let i = 0; i < this.arr.length;){
        if(t - this.arr[i] > 3000){
          this.arr.shift();
        }else{
          break;
        }
      }
      this.arr.push(t);
      return this.arr.length;
    }
  }
};

/** 
* Your RecentCounter object will be instantiated and called as such:
* var obj = Object.create(RecentCounter).createNew()
* var param_1 = obj.ping(t)
*/

//  let t = new RecentCounter();
//  t.ping(642);
//  t.ping(1849);
//  t.ping(4921);

