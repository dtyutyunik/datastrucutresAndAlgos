/*

Problem Statement #
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.


*/

//x+y+z=0 or y+z=-x

//Big 0 0(N*logN+N^2)--> 0(n^2), space 0(n)
const search= function(arr){

    arr=arr.sort((a,b)=>a-b);  //0(N*logN)
    const triplets = [];
    for (i = 0; i < arr.length; i++) {
            //i>0 so its not first element, that the current element is not equal to the prior element
        if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
        continue;
      }
      search_pair(arr, -arr[i], i + 1, triplets);
    //   console.log(triplets)
    }
  
    return triplets;
    
}
                    //arr 
function search_pair(arr,target_sum,left,triplets){
    let right = arr.length - 1;
    
    while (left < right) {
        
        const current_sum = arr[left] + arr[right];
        
        
        if (current_sum === target_sum) { // found the triplet
        triplets.push([-target_sum, arr[left], arr[right]]);
        left += 1;
        right -= 1;
        while (left < right && arr[left] === arr[left - 1]) {
            left += 1; // skip same element to avoid duplicate triplets
        }
        while (left < right && arr[right] === arr[right + 1]) {
            right -= 1; // skip same element to avoid duplicate triplets
        }
        } else if (target_sum > current_sum) {
        left += 1; // we need a pair with a bigger sum
        } else {
        right -= 1; // we need a pair with a smaller sum
        }
    }
}


// console.log(search([-5, 2, -1, -2, 3])); //[[-5, 2, 3], [-2, -1, 3]]
// console.log(search([-3, 0, 1, 2, -1, 1, -2])); //[-3, 1, 2],[-1, 0, 1], [-2, 0, 2], [-2, 1, 1],





var threeSum = function(nums) { 
    nums.sort((a, b) => a - b);    

    let results = [];

    for(let i = 0; i < nums.length; i++) {
        let left = i + 1;  
        let right = nums.length - 1;
        
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                results.push([nums[i], nums[left] ,nums[right]]);
                
                //basically means if the current number is equal to the next number then we skip it
                while(left < right && nums[left] == nums[left+1]) {
                    left++;
                    console.log('left')
                }
                left++;
                
                //basically means if the current number is equal to the next number then we skip it
                while(right > left && nums[right] == nums[right-1]) {
                    right--;
                    console.log('right')
                }
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        
        while(i < nums.length - 1 && nums[i] == nums[i+1]) {
            i++;
        }
    }    
    
    return results;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

console.log(threeSum([-2,0,0,2,2]));