/*
https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz

Problem Statement #
Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

Input: [4, 6, 6, 6, 9], key = 6
Output: [1, 3]

Input: [1, 3, 8, 10, 15], key = 10
Output: [3, 3]

Input: [1, 3, 8, 10, 15], key = 12
Output: [-1, -1]
*/


const find_range = function(arr, key) {

    result = [-1, -1];
    result[0] = binary_search(arr, key, false);  //this finds the smallest range on the left 
    console.log(result[0])
    if (result[0] !== -1) { // no need to search, if 'key' is not present in the input array
      result[1] = binary_search(arr, key, true);    //this finds the largest range on the right
    }
  
    return result;
    
  };

  const binary_search=(arr,key,findMaxIndex)=>{

    let keyIndex=-1;
    let start=0;
    let end=arr.length-1;

    while(start<=end){
        let mid=(Math.floor((start+end)/2))

        if(key<arr[mid]){
            end=mid-1;
        }else if(key>arr[mid]){
            start=mid+1;
        }else{  //key===arr[mid]
            keyIndex=mid;
            if(findMaxIndex){
                start=mid+1 //search ahead to find the last index of key
            }else{
                end=mid-1;  //search behind to find the first index of key
            }
        }
    }
    return keyIndex;

  }
  
  
  console.log(find_range([4, 6, 6, 6, 9], 6))           //[1,3]
//   console.log(find_range([1, 3, 8, 10, 15], 10))     //[3,3]
//   console.log(find_range([1, 3, 8, 10, 15], 12))     //[-1,-1]