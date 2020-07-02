/*

Problem Statement #
Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

Example 1:

Input: [4, 6, 10], key = 10
Output: 2
Example 2:

Input: [1, 2, 3, 4, 5, 6, 7], key = 5
Output: 4
Example 3:

Input: [10, 6, 4], key = 10
Output: 0
Example 4:

Input: [10, 6, 4], key = 4
Output: 2

*/


const binary_search = function(arr, key) {
    let left=0;
    let right=arr.length-1;

    let isAscneding=arr[left]<arr[right]?true:false;


    while(left<=right){
        let middle=left+Math.floor((right-left)/2)
        
        if(arr[middle]===key){
            return middle;
        }
        if(isAscneding){
            if(arr[middle]<key){
                left=middle +1;
                
            }else{
                right=middle -1;
            }
        }else{
            if(arr[middle]<key){
                right=middle -1;
            }else{
                left=middle +1;
            }
        }
    }

    return -1;
    
  };
  
  console.log(binary_search([4, 6, 10], 10))
  console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
  console.log(binary_search([10, 6, 4], 10))
  console.log(binary_search([10, 6, 4], 4))
  console.log(binary_search([10, 6, 4], 3))
  