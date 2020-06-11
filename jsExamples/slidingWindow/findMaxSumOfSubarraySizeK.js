/*

Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

//left 0,1      1,2     2,3
//right-0       1       2

//0(n) for time, 0(1) for space
const max_sub_array_of_size_k = function(k, arr) {
    
      let maxSum=0;
      let start=0;
      
      let count=0;
      let tempSum=0;
      
      while(start<arr.length-k+1){
        tempSum+=arr[count]    
        if(count>=k-1){ //when we increment
          maxSum=Math.max(maxSum,tempSum)
          tempSum=tempSum-arr[start]
          start++;
        }
       
        count++;
      }

      return maxSum
  
  };
  console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2] )) //9
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5] ))  //7

