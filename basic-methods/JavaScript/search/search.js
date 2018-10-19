'use strict'
let a = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(item){
    a.sort((a,b)=>a>b);
    
    let low = 0, high = a.length - 1, mid, element;

    while(low <= high){
        mid = Math.floor((low + high) / 2);
        element = a[mid];
        if(element < item){
            low = mid + 1;
        }else if(element > item){
            high = mid - 1;
        }else{
            return mid;
        }
    }
    return -1;
}

console.log(binarySearch(3));