/*

Problem Statement #
Given a set of distinct numbers, find all of its permutations.

Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

{1, 2, 3}
{1, 3, 2}
{2, 1, 3}
{2, 3, 1}
{3, 1, 2}
{3, 2, 1}
If a set has ‘n’ distinct elements it will have n!n! permutations.

Example 1:

Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]

*/

//this is itterative solution
function find_permutations(nums) {
    let numsLength = nums.length,result = [],permutations = [];

    permutations.push([]);

    for (let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i];
      // we will take all existing permutations and add the current number to create new permutations
      const n = permutations.length;
      for (let p = 0; p < n; p++) {
        const oldPermutation = permutations.shift();
        // create a new permutation by adding the current number at every position
        for (let j = 0; j < oldPermutation.length + 1; j++) {
          const newPermutation = oldPermutation.slice(0); // clone the permutation
          newPermutation.splice(j, 0, currentNumber); // insert currentNumber at index 'j', since it is 0 it does not remove any values
          if (newPermutation.length === numsLength) {
            result.push(newPermutation);
          } else {
            permutations.push(newPermutation);
          }
        }
      }
    }
  
    return result;
  }
  
//   console.log(find_permutations([1,3,5,6]))

//Big0 is o(n!) it is 3*2*1 for array of 3, the way it is calculated is based on remaining numbers in array, beginning it is [1,3,5]
//as we go deeper into it we remove one number from the array so it becomes 2! or the remaining variables in the array
 
function generate_permutations(nums) {
    const result = [];
    generate_permutations_recursive(nums, 0, [], result);
    return result;
  }
  
  
  function generate_permutations_recursive(nums, index, currentPermutation, result) {
      console.log(currentPermutation, 'is the index')
    if (index === nums.length) {
      result.push(currentPermutation);
    } else {
      // create a new permutation by adding the current number at every position
      for (let i = 0; i < currentPermutation.length + 1; i++) {
        newPermutation = currentPermutation.slice(0); // clone the permutation
        newPermutation.splice(i, 0, nums[index]); // insert nums[index] at index 'i'
        generate_permutations_recursive(nums, index + 1, newPermutation, result);
      }
    }
  }

  console.log(generate_permutations([1,3,5]))