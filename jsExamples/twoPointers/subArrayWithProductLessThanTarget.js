/*
Problem Statement #
Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

Example 1:

Input: [2, 5, 3, 10], target=30 
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.
Example 2:

Input: [8, 2, 6, 5], target=50 
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
Explanation: There are seven contiguous subarrays whose product is less than the taret

*/



const find_subarrays = function(arr, target) {
   
    let right=0;
    let resultArr=[];
    let product=1;

    for(let i=0;i<arr.length;i++){
        
        right=i;
        product=arr[i]
        
        let newArray=new Array(0);
        while(target/product>1){
            
            if(newArray.length<=0){
                newArray.push(arr[i])
                 resultArr.push([arr[i]]) //arr[i] instead of newArray due to garbage collection not refreshing newarray
            }
            else{
                newArray.push(arr[right]);
                resultArr.push(newArray)
            }
            
            right++;
            product*=arr[right];
        }
        
    }
    return resultArr

  };



  console.log(find_subarrays([2, 5, 3, 10],30))     //Output: [2], [5], [2, 5], [3], [5, 3], [10]
//   console.log(find_subarrays([8, 2, 6, 5],50))      //Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 