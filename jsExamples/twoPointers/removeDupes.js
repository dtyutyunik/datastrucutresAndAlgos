/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

*/

//0(n^2), 0(1) space
const remove_duplicatesWorse = function(arr) {
    
    for(let i=0;i<arr.length-1;i++){    //this is 0(n)
        if(arr[i]===arr[i+1]){
            arr.splice(i,1); //this is 0(n)
            i--;
        }
    }
    
    return arr.length;

    
  };

  //0(n), 0(1) space
  const remove_duplicates=function (arr){

    let nextNonDuplicate=1;
    let i=1;
    while(i<arr.length){
        if(arr[nextNonDuplicate-1]!==arr[i]){
            arr[nextNonDuplicate]=arr[i];
            nextNonDuplicate++;
        }
        i++;
    }

    return arr.slice(0,nextNonDuplicate);


  }

  


//   console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])); //[2,3,6,9]
//   console.log(remove_duplicates([2, 2, 2, 11])); //[2,11]


/*
Similar Questions #
Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

Example 1:

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
Example 2:

Input: [2, 11, 2, 2, 1], Key=2
Output: 2
Explanation: The first two elements after removing every 'Key' will be [11, 1].
*/

//0(n), space 0(1)
const remove_duplicatesWithKey = function(arr,key){

    let count=0;
    
    for(let i=0;i<arr.length;i++){

        if(arr[i]!==key){
            arr[count]=arr[i];
            count++
        }
    }
    
    return arr.slice(0,count);
}


console.log(remove_duplicatesWithKey([3, 2, 3, 6, 3, 10, 9, 3],3))
console.log(remove_duplicatesWithKey([2, 11, 2, 2, 1],2))