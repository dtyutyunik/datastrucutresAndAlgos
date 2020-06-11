/* find the first pair where the sum is 0, return an array that includes both values
that sum to zero or undefinded if a pair does not exist
*/


//start one pointer in beg and other at the end

function sumZero(arr, num){

let start=0;
let end=arr.length-1;

while(start<end){
    let sum=arr[start]+arr[end];
    if(sum===num){
        return [arr[start],arr[end]]
    }
    if(sum<num){
        start++;
    }else{
        end--;
    }
}
return false;

}


// console.log(sumZero([-3,-2,-1,0,1,2,3], 2))
// console.log(sumZero([-2,0,1,3], 0))
// console.log(sumZero([1,2,3],0))


//Counts the unique values in array, by moving the values in the array itself
function countUniqueValues(arr){

if(arr.length===0){return 0;}

let i=0;

for(let j=1;j<arr.length;j++){
    if(arr[i]!==arr[j]){
        i++;
        arr[i]=arr[j];
        
    }
    console.log(arr[i],arr[j])
}
//we return +1 because its indexof +1
return i+1;
    
}

console.log(countUniqueValues([1,1,1,2,3])) //2
// countUniqueValues([1,2,3,4,4,4,7,7,8]) //6
// countUniqueValues([1,2,3,4,4,4,7,7,8])
// countUniqueValues([-2,-1,0,1]) //4