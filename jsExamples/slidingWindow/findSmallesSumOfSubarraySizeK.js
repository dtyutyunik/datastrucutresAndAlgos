/*

Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.


Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

//0(n) for time, 0(1) for space
const smallest_subarray_with_given_sum = function(s, arr) {
    
    let windowSum=0;
    let windowLength=Infinity;
    let start=0;
    let counter=0;

    for(let i=0;i<arr.length;i++){

        windowSum+=arr[i];
        counter++
        while(windowSum>=s){     //so only when windowsum is greater than or equal to do we subtract
          windowSum=windowSum-arr[start];
         
          windowLength=Math.min(windowLength,counter);   
          start++;
          counter--;      //we decrement our length counter
        }
        
        
        
        
    }

    if(windowLength===Infinity){
      return 0;
    }
    return windowLength;



    
  };


  console.log(smallest_subarray_with_given_sum(7,[2, 1, 5, 2, 3, 2])) //2
  console.log(smallest_subarray_with_given_sum(7,[2, 1, 5, 2, 8])) //1
  console.log(smallest_subarray_with_given_sum(8,[3, 4, 1, 1, 6])) //3