/*
Problem Statement #
We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

Example 1:

Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]
Example 2:

Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]
Example 3:

Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]



*/

//0(n) time, 0(1) time
const cyclic_sort = function(nums) {
    
    let i=0
   
    while(i<nums.length){

        let location=nums[i]-1;
        if(i!==location){   //i is the order of the elements
            
            [nums[i],nums[location]]=[nums[location],nums[i]]
            
        }else{
            i++;
        }
        console.log(i,location,nums)
        
    }
    return nums;
  }
  
  
  console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
//   console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
//   console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)