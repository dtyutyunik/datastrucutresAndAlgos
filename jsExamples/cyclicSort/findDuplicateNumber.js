/*


Problem Statement #
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. 
You are, however, allowed to modify the input array.

Example 1:

Input: [1, 4, 4, 3, 2]
Output: 4

Example 2:

Input: [2, 1, 3, 3, 5, 4]
Output: 3

Example 3:

Input: [2, 4, 1, 4, 4]
Output: 4

*/

//(0(n) time, 0(1) space
const duplicateNumber=(arr)=>{
    
    let i=0;

    //this combines the two above
    while(i<arr.length){
        if(arr[i]!==i+1){

            let index=arr[i]-1;
            if(arr[i]!==arr[index]){        //if it is already there 
                [arr[index],arr[i]]=[arr[i],arr[index]]
            }else{
                return arr[i]
            }
         }else{
             i++;
         }
         console.log(arr)
    }
    return -1
    
}




// console.log(duplicateNumber([1, 4, 4, 3, 2]))           //4
// console.log(duplicateNumber([2, 1, 3, 3, 5, 4]))        //3
// console.log(duplicateNumber([2, 4, 1, 4, 4]))           //4




function find_duplicate(arr) {
    let slow = arr[0];
    fast = arr[arr[0]]; //this is array of the number in the first index
    
    // console.log(slow,fast)
    while (slow !== fast) {
      slow = arr[slow];
      fast = arr[arr[fast]];
    //   console.log(slow,fast)
    }
    
    // find cycle length
    let current = arr[arr[slow]];
    let cycleLength = 1;
    while (current !== arr[slow]) {
      current = arr[current];
      cycleLength += 1;
    }
    console.log(cycleLength)
    return find_start(arr, cycleLength);
  }
  
  function find_start(arr, cycleLength) {
    let pointer1 = arr[0];
    let pointer2 = arr[0];
    // move pointer2 ahead 'cycleLength' steps
    while (cycleLength > 0) {
      pointer2 = arr[pointer2];
      cycleLength -= 1;
    }
    // increment both pointers until they meet at the start of the cycle
    while (pointer1 !== pointer2) {
      pointer1 = arr[pointer1];
      pointer2 = arr[pointer2];
    }
    return pointer1;
  }
  
  console.log(find_duplicate([1, 4, 4, 3, 2]));
// console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
// console.log(find_duplicate([2, 4, 1, 4, 4]));