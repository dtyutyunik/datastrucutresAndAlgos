/*

378. Kth Smallest Element in a Sorted Matrix
Medium

2257

119

Add to List

Share
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.


*/

//o(nlogn) , 0(1) we are not creating a new space but using current one
//however problem is we are resorting a sorting array not as efficient
const kthSmallest = (nums, k) => {
    //  return quickSort(nums, 0, nums.length - 1);
    nums=nums.flat(1)
    return quickSelect(nums, 0, nums.length - 1,k);
    
};

function pivot(nums,start=0,end=nums.length-1){
    let pivotPoint=start;
    console.log(nums[start])
    for(let i=start+1; i<=end ; i++){
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
function quickSelect(nums,left=0,right=nums.length-1,k){

        //still the pivotPoint
        let pivotIndex=pivot(nums,left,right)
        console.log(nums, pivotIndex)
        if(k<nums.length-pivotIndex){
            //right
            return quickSelect(nums,pivotIndex+1,right,k)

        }else if(k>nums.length-pivotIndex){
            //left
            return quickSelect(nums,left,pivotIndex-1,k)
        }
        //this will be returned if it is equal to it
        // return nums[pivotIndex];
        
        return nums[nums.length-1-pivotIndex];


}


// console.log(kthSmallest([[ 1,  5,  9],[10, 11, 13],[12, 13, 15]],8));
console.log(kthSmallest([[1,3,5],[6,7,12],[11,14,14]],6));
// console.log(kthSmallest([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],8));