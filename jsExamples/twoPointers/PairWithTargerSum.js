/*

Problem Statement #
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11


*/

//space 0(1), time 0(n)
const pair_with_targetsum = function(arr, target_sum) {
    // TODO: Write your code here

    let left=0,right=arr.length-1;

    while(left<right){
        if(arr[left]+arr[right]===target_sum){
            return [left,right]
        }else if(arr[left]+arr[right]>target_sum){
            right--;
        }else{
            left++;
        }
    }
    

    return [-1, -1];
  }

    //space 0(n), time 0(n)
  const pair_with_targetsumHash= function(arr, target_sum){

    let nums={};

    for(let i=0;i<arr.length-1;i++){
        const num=arr[i];

        if(target_sum-num in nums){
            return [nums[target_sum-num],i]
        }
        nums[arr[i]]=1;
        console.log(nums)
    }
    return [-1,-1]
  }


  console.log(pair_with_targetsumHash([1, 2, 3, 4, 6],6))   //[1,3]
//   console.log(pair_with_targetsumHash([2, 5, 9, 11],11))    //[0,2]