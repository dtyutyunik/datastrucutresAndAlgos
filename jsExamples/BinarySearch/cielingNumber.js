/*
Problem Statement #
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

Example 1:

Input: [4, 6, 10], key = 6
Output: 1
Explanation: The smallest number greater than or equal to '6' is '6' having index '1'.
Example 2:

Input: [1, 3, 8, 10, 15], key = 12
Output: 4
Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.
Example 3:

Input: [4, 6, 10], key = 17
Output: -1
Explanation: There is no number greater than or equal to '17' in the given array.
Example 4:

Input: [4, 6, 10], key = -1
Output: 0
Explanation: The smallest number greater than or equal to '-1' is '4' having index '0'.

*/


const search_ceiling_of_a_number = function(arr, key) {
    
    let left=0;
    let right=arr.length-1;

    if (key > arr[arr.length-1]) { // if the 'key' is bigger than the biggest element
         return -1;
    }

    while(left<=right){
        let middle=left+Math.floor((right-left)/2)

        if(arr[middle]===key){
            return middle;
        }

        if(arr[middle]<key){
            left=middle+1;
            
        }else{
            right=middle-1;
        }


    }

        // since the loop is running until 'left <= right', so at the end of the while loop, 'left === right+1'
        // we are not able to find the element in the given array, so the next big number will be arr[left]
        return left;
  
    
  };
  
  
//   console.log(search_ceiling_of_a_number([4, 6, 10], 6)) //1
//   console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12)) //4
//   console.log(search_ceiling_of_a_number([4, 6, 10], 17)) //-1
//   console.log(search_ceiling_of_a_number([4, 6, 10], -1)) //0
  

  /*

    Given an array of numbers sorted in ascending order, find the floor of a given number ‘key’. The floor of the ‘key’ will be the biggest element in the given array smaller than or equal to the ‘key’

    Write a function to return the index of the floor of the ‘key’. If there isn’t a floor, return -1.
  */

  const search_floor_of_a_number = function(arr, key) {
    
    let left=0;
    let right=arr.length-1;

    if (key < arr[0]) { // if the 'key' is bigger than the biggest element
        return -1;
    }

    while(left<=right){
        let middle=left+Math.floor((right-left)/2)
        // console.log(left,right,middle)
        if(arr[middle]===key){
            return middle;
        }

        if(arr[middle]<key){
            left=middle+1;
            
        }else{
            right=middle-1;
        }
        

    }

        // since the loop is running until 'left <= right', so at the end of the while loop, 'left === right+1'
        // we are not able to find the element in the given array, so the next big number will be arr[left]
        return right;
  
    
  };

  console.log(search_floor_of_a_number([4, 6, 10], 6)) //1
  console.log(search_floor_of_a_number([1, 3, 8, 10, 15], 12)) //3
  console.log(search_floor_of_a_number([4, 6, 10], 17)) //2
  console.log(search_floor_of_a_number([4, 6, 10], -1)) //-1