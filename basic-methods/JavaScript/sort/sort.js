function ArrayList(){
    let array = [];

    this.insert = function(item){
        array.push(item);
    };

    const swap = function(array, index1, index2){
        let aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    this.toString = function(){
        return array.join();
    };

    this.array = function(){
        return array;
    };

    this.bubbleSort = function(){
        let length = array.length;

        for(let i = 0; i < length; i++){
            console.log('--- ');
            for(let j = 0; j < length - 1; j++){
                console.log('compare ' + array[j] + ' with ' + array[j+1]);
                if (array[j] > array[j+1]){
                    console.log('swap ' + array[j] + ' with ' + array[j+1]);
                    swap(array, j, j+1);
                }
            }
        }
    };

    this.modifiedBubbleSort = function(){
        let length = array.length;
        
        for(let i = 0; i < length; i++){
            for(let j = 0; j<length-1-i;j++){
                if(array[j] > array[j+1]){
                    swap(array,j,j+1);
                }
            }
        }
    };

    this.selectionSort = function(){
        let length = array.length,
            indexMin;

        for(let i = 0; i < length - 1; i++){
            indexMin = i;
            for(let j = i; j < length; j++){
                if(array[indexMin] > array[j]){
                    indexMin = j;
                }
            }
            if(i !== indexMin){
                swap(array,i,indexMin);
            }
        }
    };

    this.insertionSort = function(){
        let length = array.length,
            j, tmp;
        for(let i = 1; i < length; i++){
            j = i;
            tmp = array[i];
            while(j > 0 && array[j-1]>tmp){
                array[j] = array[j-1];
                j--;
            }
            array[j] = tmp;
        }
    };

    this.mergeSort = function(){
        array = mergeSortRec(array);
    };

    const mergeSortRec = function(array){
        let length = array.length;

        if(length === 1){
            return array;
        }

        let mid = Math.floor(length/2),
            left = array.slice(0,mid),
            right = array.slice(mid,length);
        return merge(mergeSortRec(left),mergeSortRec(right));
    };

    const merge = function(left,right){
        let result = [],
            il = 0,
            ir = 0;

        while(il < left.length && ir <right.length){
            if(left[il] < right[ir]){
                result.push(left[il++]);
            }else{
                result.push(right[ir++]);
            }
        }

        while(il <left.length){
            result.push(left[il++]);
        }
        while(ir<right.length){
            result.push(right[ir++]);
        }
        return result;
    };

    this.quickSort = function(){
        quick(array, 0, array.length - 1);
    };

    const partition = function(array, left, right){
        let pivot = array[Math.floor((right+left)/2)],
            i = left,
            j = right;
        while(i <= j){
            while(array[i] < pivot){
                i++;
            }
            while(array[j] > pivot){
                j--;
            }
            if(i <= j){
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    };

    const quick = function(array, left, right){
        let index;
        if(array.length > 1){
            index = partition(array, left, right);
            if(left < index - 1){
                quick(array, left, index-1);
            }
            if(index < right){
                quick(array, index,right);
            }
        }
        return array;
    };

    
}

function createNonSortedArray(size){
    var array = new ArrayList();

    for (var i = size; i> 0; i--){
        array.insert(i);
    }

    return array;
}

function createRandomNonSortedArray(){
    var array = new ArrayList();

    array.insert(3);
    array.insert(5);
    array.insert(1);
    array.insert(6);
    array.insert(4);
    array.insert(7);
    array.insert(2);

    return array;
}

function printArray(array){
    console.log(array.toString());
}

function createNonSortedArrayAndPrint(size){
    var array = createNonSortedArray(size);
    printArray(array);

    return array;
}

console.log('********** Bubble Sort **********');

var array = createNonSortedArrayAndPrint(5);
// const array = [1,4,6,7,1,5,213,6,43,1,6451,213];

// array.bubbleSort();
// array.modifiedBubbleSort();
// array.selectionSort();
// array.insertionSort();
// array.mergeSort();
array.quickSort();

printArray(array);