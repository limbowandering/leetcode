function ArrayList(){
    let array = [];

    this.insert = function(item){
        array.item(item);
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