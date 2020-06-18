/*

Problem Statement #
Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

Example 1:

Input: [3, 1, 5, 12, 2, 11], K = 3
Output: [5, 12, 11]
Example 2:

Input: [5, 12, 11, -1, 12], K = 3
Output: [12, 11, 12]

*/

const findKthLargest = (nums, k) => {
    //  return quickSort(nums, 0, nums.length - 1);
    // nums=nums.flat(1)
    return quickSelectLargest(nums, 0, nums.length - 1,k);
    
};

function pivot(nums,start=0,end=nums.length-1){
    let pivotPoint=start;
    console.log(nums[start])
    for(let i=start+1;i<=end;i++){
        //> is decending order order, < is ascending order
        if(nums[i]<=nums[start]){
            pivotPoint++;
            [nums[i],nums[pivotPoint]]=[nums[pivotPoint],nums[i]]
        }
        
    }
    [nums[start],nums[pivotPoint]]=[nums[pivotPoint],nums[start]]
    return pivotPoint
}


//similar to quickSort, except we add the k element to use it as a decipher find the largest element
function quickSelectLargest(nums,left=0,right=nums.length-1,k){

    let pivotIndex=pivot(nums,left,right)
    console.log(nums,pivotIndex)
        if(k<nums.length-pivotIndex){
            //right
            return quickSelectLargest(nums,pivotIndex+1,right,k)
        }else if(k>nums.length-pivotIndex){
            //left
            return quickSelectLargest(nums,left,pivotIndex-1,k)
        }
        //this will be returned if it is equal to it
    
        return nums[pivotIndex];


}


//this is normal quickSort, however with quickSelect we can choose the kth element to decide which way to go down to decipher
function quickSort(nums,left=0,right=nums.length-1){

    if(left<right){
        let pivotIndex=pivot(nums,left,right)
        console.log(nums, pivotIndex)
        quickSort(nums,left,pivotIndex-1)
        quickSort(nums,pivotIndex+1,right)
    }
    return nums;


}

//   console.log(`Here are the top K numbers: ${findKthLargest([3,2,3,1,2,4,5,5,6], 8)}`) //largest




const findKthSmallest = (nums, k) => {
    //  return quickSort(nums, 0, nums.length - 1);
    // nums=nums.flat(1)
    return quickSelectSmallest(nums, 0, nums.length - 1,k);
    
};

function pivot(nums,start=0,end=nums.length-1){
    let pivotPoint=start;
    console.log(nums[start])
    for(let i=start+1;i<=end;i++){
        //> is decending order order, < is ascending order
        if(nums[i]<=nums[start]){
            pivotPoint++;
            [nums[i],nums[pivotPoint]]=[nums[pivotPoint],nums[i]]
        }
        
    }
    [nums[start],nums[pivotPoint]]=[nums[pivotPoint],nums[start]]
    return pivotPoint
}


//similar to quickSort, except we add the k element to use it as a decipher find the largest element
function quickSelectSmallest(nums,left=0,right=nums.length-1,k){

    let pivotIndex=pivot(nums,left,right)
    // console.log(nums,pivotIndex)
        if(k-1<pivotIndex){
            return quickSelectSmallest(nums,left,pivotIndex-1,k) //left
            
            
        }else if(k-1>pivotIndex){
            
            return quickSelectSmallest(nums,pivotIndex+1,right,k) //right
        }
        //this will be returned if it is equal to it
    
        return nums[pivotIndex];


}


console.log(`Here are the smallest K numbers: ${findKthSmallest([3,2,3,1,2,4,5,5,6], 6)}`) //largest