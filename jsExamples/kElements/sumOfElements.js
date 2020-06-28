/*

Problem Statement #
Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.

Example 1:

Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
Output: 23
Explanation: The 3rd smallest number is 5 and 6th smallest number 15. The sum of numbers coming
between 5 and 15 is 23 (11+12).
Example 2:

Input: [3, 5, 8, 7], and K1=1, K2=4
Output: 12
Explanation: The sum of the numbers between the 1st smallest number (3) and the 4th smallest 
number (8) is 12 (5+7).
*/




const find_sum_of_elements = function(nums, k1, k2) {
    
    let ans=quickSort(nums,0,nums.length-1);
    // console.log(ans)
    let sum=0;
    for(let i=0;i<nums.length;i++){
        
        if(i>k1-1 && i<k2-1){
            // console.log(i, nums[i])
            sum+=nums[i]
        }
    }
    return sum;

  };


  function quickSort(nums,left,right){
        
        if(left<right){
            let pivot=swap(nums,left,right);
            // console.log(pivot)
            quickSort(nums,0,pivot-1);
            quickSort(nums,pivot+1,right)
        }
        return nums;
  }

  function swap(nums,left,right){
        let start=left;

        for(let i=left+1;i<=right;i++){
            if(nums[i]<=nums[left]){
                start++
                [nums[i],nums[start]]=[nums[start],nums[i]]
            }
        }

        [nums[start],nums[left]]=[nums[left],nums[start]]
        return start;

  }
  
  
  console.log(find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6));   //23
  console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([3, 5, 8, 7], 1, 4)}`)  //12
  