/*

Problem Statement #
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2
Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7

*/


//0(n) time, 0(1) for space
const missingNumber=(arr)=>{

  let i=0;
  while(i<arr.length){
      let index=arr[i];
      if(index===arr.length){
        i++;        //if index equals array length, we will ignore and skip it
      }
      else if(index!==i){
          [arr[index],arr[i]]=[arr[i],arr[index]]
      }else{
        i++;
      }
      
  }

  //we run through the loop again after it is sorted to see if something is out of place
  for(let i=0;i<arr.length;i++){
      if(arr[i]!==i){
          return i
      }
  }
//   return arr;
  
}



console.log(missingNumber([4, 0, 3, 1]))                    //2
console.log(missingNumber([8, 3, 5, 2, 4, 6, 0, 1]))        //7