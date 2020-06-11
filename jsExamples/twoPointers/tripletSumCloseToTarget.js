/*
Problem Statement #
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. 
If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.

*/

const triplet_sum_close_to_target = function(arr, target_sum) {
    
    //create an array with elements of each other number added to it besides the frist 2, then move the first 2 down

    let tempObj={};
    let start=0;
    let end=arr.length-1;
    let sum=0;
    
    //creates all possible combinations of numbers exluding the current numbers
    for(let i=0;i<arr.length-1;i++){
        start=0;
        end=arr.length-1;
        //while first number is less than start and 2nd number is less than end
        while(start<i||i+1<end){
            //if start is less than i, then we will add the number leading up to it
            if(start<i){
                //sum is used as obj key
                sum=arr[i]+arr[i+1]+arr[start]
                //the obj value is the array of the summation
                tempObj[sum]=[arr[i],arr[i+1],arr[start]]
                
                start++;
            }
            //if the 2nd number is less than end then we will add all the ending numbers until they reach the end
            if(i+1<end){
                //sum is used as obj key
                sum=arr[i]+arr[i+1]+arr[end]
                //the obj value is the array of the summation
                tempObj[sum]=[arr[i],arr[i+1],arr[end]]
                
                end--;
            }
            
        }
    }

    // console.log(tempObj)
    
    let count=0;

    for(let i in tempObj){
        //if the key of the object is less than or equal to the target sum, we will take the highest number that would equal to the targetsum
        if(i<=target_sum){ 
            count=Math.max(count,i)
        }
    }
    
    //since we are returning the value of the sum, we return Number(count)
    return Number(count)
   
    
    
    
    
  };


  console.log(triplet_sum_close_to_target([-2, 0, 1, 2],2))     //[-2,1,2] with sum of 1
//   console.log(triplet_sum_close_to_target([-3, -1, 1, 2],1))    //[-3,1,2] with sum of 0
//   console.log(triplet_sum_close_to_target([1, 0, 1, 1],100))   //[1,1,1] with sum of 3