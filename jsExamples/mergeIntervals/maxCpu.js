/*
Maximum CPU Load (hard) #
We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

Example 1:

Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
jobs are running at the same time i.e., during the time interval (2,4).
Example 2:

Jobs: [[6,7,10], [2,4,11], [8,12,15]]
Output: 15
Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
Example 3:

Jobs: [[1,4,2], [2,4,1], [3,6,5]]
Output: 8
Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4]. 

*/


function maxCpu(arr){
    let maxCpu=0;
    arr.sort((a,b)=>a[0]-b[0])

    let i=0;
    

    while(i<arr.length){
       let right=i+1

        //out of index handler
        if(right===arr.length){
            maxCpu=Math.max(maxCpu,arr[i][2]);
            break;
        }

        let leftbound=arr[i][0]>arr[right][0]&&arr[i][0]<arr[right][1]
        let rightbound=arr[i][1]>arr[right][0]&&arr[i][1]<arr[right][1]

        if(leftbound ||rightbound){
            //add current value with the next calue
            maxCpu+=arr[i][2]+arr[right][2];
        }
        // console.log(maxCpu)
        maxCpu=Math.max(maxCpu,arr[i][2])
        i++;
    }
    return maxCpu
}


console.log(maxCpu([[1,4,3], [2,5,4], [7,9,6]]))            //7
console.log(maxCpu([[6,7,10], [2,4,11], [8,12,15]]))        //15
console.log(maxCpu([[1,4,2], [2,4,1], [3,6,5]]))            //8