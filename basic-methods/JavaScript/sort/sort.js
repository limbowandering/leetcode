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
    }
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

array.bubbleSort();

printArray(array);