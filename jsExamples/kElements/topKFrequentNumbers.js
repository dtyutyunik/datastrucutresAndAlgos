/*
https://leetcode.com/problems/top-k-frequent-elements/

347. Top K Frequent Elements
Medium

2948

206

Add to List

Share
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
*/

var topKFrequent = function(nums, k) {
    let freq={};
    let max=0;
    
    for(let i=0;i<nums.length;i++){
        
       freq[nums[i]]=(freq[nums[i]]||0)+1
        
        max=Math.max(max,freq[nums[i]]) //we use max to get highest value
        
    }
    
   const bucket = Array(nums.length + 1).fill().map(() => []);
    
    for (let num in freq) {
        bucket[freq[num]].push(parseInt(num));
    }
    
    let result=[];
    
    for (let i = nums.length; i >= 0 && k > 0; k--) {
        while (bucket[i].length === 0) i--;
        result.push(bucket[i].shift());
    }
    
    return result;
    
    
  
};