/*
Employee Free Time (hard) #
For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

Example 1:

Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: Both the employess are free between [3,5].
Example 2:

Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
Output: [4,6], [8,9]
Explanation: All employess are free between [4,6] and [8,9].
Example 3:

Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
Output: [5,7]
Explanation: All employess are free between [5,7].


*/

function employeeFreeTime(arr){
    
    //flat combines multi arrays into one dimensional array, we chose 1 as we only want to do it one level deep, as opposed to more
    arr=arr.flat(1).sort((a,b)=>(a[0]-b[0]))
    console.log(arr)
    let i=0;
    let breakTime=[];
    let right=1;

    while(i<arr.length){
        //out of bounds
        if(right===arr.length){
            break;
        }
        leftOverlay=arr[i][0]>=arr[right][0] && arr[i][0]<=arr[right][1]
        rightOverlay=arr[i][1]>=arr[right][0] && arr[i][0]<=arr[right][1]

        if(leftOverlay || rightOverlay){
            
        }else{
            breakTime.push([arr[i][1],arr[right][0]])
        }
        
        right++
        i++;
    
    }
    return breakTime
}

// console.log(employeeFreeTime([[[1,3], [5,6]], [[2,3], [6,8]]]))                 //[3,5]
// console.log(employeeFreeTime([[[1,3], [9,12]], [[2,4]], [[6,8]]]))              //[4,6], [8,9]
console.log(employeeFreeTime([[[1,3]], [[2,4]], [[3,5], [7,9]]]))               //[5,7]