/*

Problem Statement #
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

Example 1:

Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
Example 2:

Input: [2, 4, 1, 2]
Output: 3
Example 3:

Input: [2, 3, 2, 1]
Output: 4


*/


//0(n) time, 0(1) space if we ignore the outputted array, but really 0(n)
const findAllMissingNumber=(arr)=>{

    let i=0;
    while(i<arr.length){
        let index=arr[i]-1;
        // console.log(arr[index], index)
        if(arr[i]!==arr[index]){
            [arr[index],arr[i]]=[arr[i],arr[index]]
        }else{
            i++
            console.log('moved on')
        }
        console.log(arr)
    }

    //run through sorted array and whatever doesn match push it into missing array
    let missingArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==i+1){
            missingArr.push(i+1)
        }
    }

    return missingArr;

}



// console.log(findAllMissingNumber([2, 3, 1, 8, 2, 3, 5, 1])) //4,6,7
console.log(findAllMissingNumber([2, 4, 1, 2]))             //3
// console.log(findAllMissingNumber([2, 3, 2, 1]))             //4