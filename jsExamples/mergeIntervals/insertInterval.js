/*
Problem Statement #
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

Example 2:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
Example 3:

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
 

c.start = min(a.start, b.start)
    c.end = max(a.end, b.end)

*/



const insertInterval2= (intervals, new_interval)=>{

    let merged = []


    for(let i=0;i<intervals.length;i++){
       let start=intervals[i][0]
        let end=intervals[i][1]
       
        //base case
        console.log(start,end)
        if(intervals[i][1]<new_interval[0]){
            merged.push([intervals[i][0],intervals[i][1]])
        }

        if(new_interval[0]<intervals[i][0] && new_interval[1]>intervals[i][1]){
            start=Math.min(start,new_interval[0]);
            end=Math.max(end,new_interval[1])
            merged.push([start,end])
            // continue;
            
        }
        if(intervals[i][0]>new_interval[1]){
            merged.push([intervals[i][0],intervals[i][1]])
        }
        
        // merged.push([start,end])


    }
    


    return merged;

    

}

let insertInterval= (intervals,new_interval)=>{
    let merged=[], i=0;

    
    // skip and add to output) all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i][1] < new_interval[0]) {
    merged.push(intervals[i]);
    i ++;
  }

  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i][0] <= new_interval[1]) {
    new_interval[0] = Math.min(intervals[i][0], new_interval[0]);
    new_interval[1] = Math.max(intervals[i][1], new_interval[1]);
    i ++;
    console.log(new_interval)
  }

  // insert the new_interval
  merged.push(new_interval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i ++;
  }

  return merged;
}


// console.log(insertInterval([[1,3], [5,7], [8,12]],[4,6]))   //Output: [[1,3], [4,7], [8,12]]
console.log(insertInterval([[1,3], [5,7], [8,12]],[4,10]))   //Output: [[1,3], [4,12]]
// console.log(insertInterval([[2,3], [5,7]],[1,4]))   //Output: [[1,4], [5,7]]


