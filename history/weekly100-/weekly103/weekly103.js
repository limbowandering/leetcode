const smallestRangeI = function(A,K){
  let max = -1;
  let min = 10001;
  let length = A.length;
  for(let i = 0; i < length; i++){
    if(A[i] > max){
      max = A[i];
    }
    if(A[i] < min){
      min = A[i];
    }
  }
  if(max - min <= K * 2){
    return 0;
  }else{
    return (max - min) - K*2;
  }
};

