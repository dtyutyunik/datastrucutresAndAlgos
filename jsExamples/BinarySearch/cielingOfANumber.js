/*

https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7

Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

Input: [4, 6, 10], key = 6
Output: 1
Explanation: The smallest number greater than or equal to '6' is '6' having index '1'.

Input: [1, 3, 8, 10, 15], key = 12
Output: 4
Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.

Input: [4, 6, 10], key = 17
Output: -1
Explanation: There is no number greater than or equal to '17' in the given array.

Input: [4, 6, 10], key = -1
Output: 0
Explanation: The smallest number greater than or equal to '-1' is '4' having index '0'.
*/


const search_ceiling_of_a_number = function(arr, key) {
    // TODO: Write your code here
    let start=0;
    let end=arr.length-1;


    while(start<=end){
        let guess=Math.floor((start+end)/2);

        if(key===arr[guess]){
            return guess;
        }
        if(arr[guess]<key){
             start=guess+1
        }else{
            end=guess-1;
        }

    }
    // console.log(start)

    if(start>arr.length-1){
        return -1;
    }else{
        return start;
    }
    
  };
  
  
  console.log(search_ceiling_of_a_number([4, 6, 10], 6)) //smallest number greather or equal to 6 is 6 having index of 1
  console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12)) //smallest number greaer than or equal to 12 is 15, index 4
  console.log(search_ceiling_of_a_number([4, 6, 10], 17)) //-1 cause there is no number greater than or equal to 17
  console.log(search_ceiling_of_a_number([4, 6, 10], -1)) //0 the smallest number greather than or equal to -1 is 4, having index of 0