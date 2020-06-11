/*

Find the First K Missing Positive Numbers (hard) #
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.
Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.



*/


//0(n) for time, 0(n) for space due to the set
const find_first_k_missing_positive = (arr, k)=> {
    missingNumbers = [];
    // TODO: Write your code here

    let i=0;
    while(i<arr.length){
        let index=arr[i]-1
        if(arr[i]>0 &&arr[i]<=arr.length && arr[i]!==arr[index]){
            [arr[index],arr[i]]=[arr[i],arr[index]]
        }else{
            i++;
        }
    }
    console.log(arr)


    const extraNumbers = new Set();     //this is extra numbers that do not match up in the sequence, so dupes and negatives
    for (i = 0; i < arr.length; i++) {
        if (missingNumbers.length < k) {
        if (arr[i] !== i + 1) {
            missingNumbers.push(i + 1);
            extraNumbers.add(arr[i]);
        }
        }
    }
    console.log(missingNumbers, extraNumbers)
    
    i=1; //we are starting from 1 as it doesnt make sense to add 0
    while(missingNumbers.length<k){
        const candidateNumber=i+ arr.length;
        //ignore if the array contains the candidate number
        if(!extraNumbers.has(candidateNumber)){
            missingNumbers.push(candidateNumber)
        }
        i++;
    }
    return missingNumbers;
  };


  console.log(find_first_k_missing_positive([3, -1, 4, 5, 5],3))            //[1,2,6]
  console.log(find_first_k_missing_positive([2, 3, 4],3))                   //[1,5,6]
  console.log(find_first_k_missing_positive([-2, -3, 4],2))                 //[1,2]