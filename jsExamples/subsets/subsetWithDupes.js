/*

Problem Statement #
Given a set of numbers that might contain duplicates, find all of its distinct subsets.

Example 1:

Input: [1, 3, 3]
Output: [], [1], [3], [1,3], [3,3], [1,3,3]
Example 2:

Input: [1, 5, 3, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 

*/

//0(2^n)
const find_subsets = function(nums) {
    // sort the numbers to handle duplicates
    nums.sort();
    const subsets = [];
    subsets.push([]);

    let startIndex = 0, endIndex = 0;

    for (i = 0; i < nums.length; i++) {
        startIndex = 0;
        // if current and the previous elements are same, create new subsets only from the subsets
        
        // added in the previous step, this will only work at least after first instance
        if (i > 0 && nums[i] === nums[i - 1]) {
            startIndex = endIndex + 1;
        }

        endIndex = subsets.length - 1;

        for (j = startIndex; j < endIndex + 1; j++) {
            // create a new subset from the existing subset and add the current element to it
            const set = subsets[j].slice(0);
            set.push(nums[i]);
            subsets.push(set);
        }
    }
    return subsets;
  };
  
  
//   console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`)
  console.log(find_subsets([1, 3, 3]))
//   console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`)
  