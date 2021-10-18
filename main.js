// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr,n){
  //coding here..


  small = 0;
  
  for (i = 0; i < arr.length; i++){
    
    if (arr[i].toFixed(2) < n)
    
      small++;
      
  }
  
