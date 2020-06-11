/*
Problem Statement #
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Example 1:

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
Example 2:

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.
Example 3:

Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
 


*/


let conflictingAppointsments=(arr)=>{
    let i=0;
    let right=1;

    while(i<arr.length-1){
        leftOverlap=arr[i][0]>arr[right][0] && arr[i][0]<arr[right][1]          //compare i start to see if it falls between beginning or right and end of right
        rightOverlap=arr[i][1]>arr[right][0] && arr[i][1]<arr[right][1]          //compare i end to see if it falls between beginning or right and end of right
        console.log(leftOverlap,rightOverlap)
        if(leftOverlap ||rightOverlap){
            return false;
        }
        right++;

        if(right===arr.length){
            i++;
            right=i+1;
        }

    }
    return true;
}


console.log(conflictingAppointsments([[1,4], [2,5], [7,9]]))            //false
// console.log(conflictingAppointsments([[6,7], [2,4], [8,12]]))           //true
// console.log(conflictingAppointsments([[4,5], [2,3], [3,6]]))            //false