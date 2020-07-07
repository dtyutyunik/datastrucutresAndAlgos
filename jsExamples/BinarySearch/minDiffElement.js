/*
Problem Statement #
Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.

Example 1:

Input: [4, 6, 10], key = 7
Output: 6
Explanation: The difference between the key '7' and '6' is minimum than any other number in the array 
Example 2:

Input: [4, 6, 10], key = 4
Output: 4
Example 3:

Input: [1, 3, 8, 10, 15], key = 12
Output: 10
Example 4:

Input: [4, 6, 10], key = 17
Output: 10

*/


const search_min_diff_element = function(arr, key) {
    let start=0,end=arr.length-1;
    

    while(start<=end){
        let middle=start+Math.floor((end-start)/2);
        // console.log(start,middle,end)
      if(Math.abs(key-arr[middle])<Math.abs(key-arr[middle+1]) && Math.abs(key-arr[middle])<Math.abs(key-arr[middle-1])){
          return arr[middle];
      }else if(Math.abs(key-arr[middle+1])<Math.abs(key-arr[middle-1])){
        start=middle+1
      }else{
        end=middle-1 
      }
        
    }
    
    return arr[start];
  };
  
  
  console.log(search_min_diff_element([4, 6, 10], 7))               //6
  console.log(search_min_diff_element([4, 6, 10], 4))               //4
  console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))       //10
  console.log(search_min_diff_element([4, 6, 10], 17))              //10
  