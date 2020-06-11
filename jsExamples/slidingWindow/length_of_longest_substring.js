/*

Problem Statement #
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.


*/



const length_of_longest_substring = function(arr, k) {
    
    let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

    // Try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        if (arr[windowEnd] === 1) {
            maxOnesCount ++;
        }
        console.log('windowend', windowEnd, 'windowstart', windowStart, 'maxOnesCount', maxOnesCount)

        // Current window size is from windowStart to windowEnd, overall we have a maximum of 1s
        // repeating 'maxOnesCount' times, this means we can have a window with 'maxOnesCount' 1s
        // and the remaining are 0s which should replace with 1s.
        // now, if the remaining 1s are more than 'k', it is the time to shrink the window as we
        // are not allowed to replace more than 'k' 0s
        if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
            if (arr[windowStart] === 1) {
                maxOnesCount --;
            }
                windowStart ++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;


  };



//   console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));           //6
// console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));       //9



let longestsubArray=(arr,k)=>{

    let left = 0, right=0;
    for(right;right<arr.length;right++){
        // If we included a zero in the window we reduce the value of K.
        // Since K is the maximum zeros allowed in a window.
        if(arr[right]===0){
            k--;
        }
             // A negative K denotes we have consumed all allowed flips and window has
           // more than allowed zeros, thus increment left pointer by 1 to keep the window size same.
        if(k<0){
            // If the left element to be thrown out is zero we increase K.
            if(arr[left]===0){
                k++;    //if it is 0 then that means we are moving 
            }

            left++; //we move left up until k is not 0
        }
        // console.log(`left is ${left}, right is ${right}, k is ${k}`)
    }
    return right-left;

}

console.log(longestsubArray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));           //6
// console.log(longestsubArray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));       //9
// console.log(longestsubArray([0, 1, 1, 1, 0, 1, 0, 1], 2)); 