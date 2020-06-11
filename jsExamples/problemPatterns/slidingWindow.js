/*
write a function that accepts array of integers and number called n
the function should calculate the max sum of n consecutive elements in
the array

*/

function maxSubarraySum(arr,num){
    if(arr.length<num){return null;}

    let maxSum=0;
    let tempSum=0;

    //this will get us the first window
    for(let i=0;i<num;i++){
        maxSum+=arr[i];
    }

    tempSum=maxSum;

    //this moves the window
    for(let i=num;i<arr.length;i++){
        
        //arr[i-num] is the first number
        //arr[i] is the current
        tempSum=tempSum+arr[i]-arr[i-num]
        maxSum=Math.max(maxSum,tempSum);
    }
    return maxSum;
    
    
}

console.log(maxSubarraySum([1,2,4,2,8,1,5],2)) //10
console.log(maxSubarraySum([1,2,4,2,8,1,5],4)) //16
console.log(maxSubarraySum([],4)) //0