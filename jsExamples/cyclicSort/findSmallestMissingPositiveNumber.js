/*
Find the Smallest Missing Positive Number (medium) #
Given an unsorted array containing numbers, find the smallest missing positive number in it.

Example 1:

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'
Example 2:

Input: [3, -2, 0, 1, 2]
Output: 4
Example 3:

Input: [3, 2, 5, 1]
Output: 4

*/

//Time 0(n), space 0(1)
const findSmallestMissingPositiveNumber=(arr)=>{

    let smallestPositiveNumber=1;       //is used so we know if the index we start from is 0 or 1
    for(let i=0;i<arr.length;i++){
        
        if(arr[i]<0){
            continue;
        }else{
            smallestPositiveNumber=Math.min(smallestPositiveNumber,arr[i])
        }
    }


    let i=0;
    while(i<arr.length){
        let indexStart;
        if(smallestPositiveNumber===0){
            indexStart=arr[i];
        }else{
            indexStart=arr[i]-1;        //if it is not 0, then we subtract 1 to make the index 0
        }
        //arr.length for outOfBounds, arr[i]<0 if it is negative
        if(arr[i]<0 || arr[i]>arr.length){
            i++;
        }else if(arr[i]!==arr[indexStart]){
            [arr[i],arr[indexStart]]=[arr[indexStart],arr[i]]
        }else{
            i++;
        }
    }

    // console.log(arr)
    for(let i=0;i<arr.length;i++){
        
        let compare;
        smallestPositiveNumber===0?compare=i:compare=i+1;
        if(compare!==arr[i]){
            return compare;
        }

    }
}
function find_first_missing_positive(nums) {
    let i = 0;
    n = nums.length;
    while (i < n) {
      j = nums[i] - 1;
      //ignores if it is 0 or larger than array
      if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i += 1;
      }
    }
    console.log(nums)
    for (i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
  
    return nums.length + 1;
  }
  
  
  console.log(find_first_missing_positive([-3, 1, 5, 4, 2]));       //[ 1, 2, -3, 4, 5 ]                3
  console.log(find_first_missing_positive([3, -2, 0, 1, 2]));       //[ 1, 2, 3, 0, -2 ]                4
  console.log(find_first_missing_positive([3, 2, 5, 1]));           //[ 1, 2, 3, 5 ]                    4

//////Or a different way of doing it, ignoring if the number is a 0 would be



console.log(findSmallestMissingPositiveNumber([-3, 1, 5, 4, 2]))        //[ 1, 2, -3, 4, 5 ]            3
console.log(findSmallestMissingPositiveNumber([3, -2, 0, 1, 2]))        //[ 0, 1, 2, 3, -2 ]            4
console.log(findSmallestMissingPositiveNumber([3, 2, 5, 1]))            //[ 1, 2, 3, 5 ]                4