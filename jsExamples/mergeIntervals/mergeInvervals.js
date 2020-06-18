/*
Problem Statement #
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
one [1,5].

Example 2:

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
 
Example 3:

Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.



 c.start = a.start
    c.end = max(a.end, b.end)
*/



  //0(n log n) for time, 0(n) for space
  function mergeArr(intervals){
      intervals.sort((a,b)=>a[0]-b[0]); //[0] to compare the first index in each array
    //   console.log(intervals)
      
      let start=intervals[0][0];    //first instance beginning
      let end=intervals[0][1];      //first instance ending
      const mergedArr=[];

      for(let i=1;i<intervals.length;i++){
          
        if(intervals[i][0]<=end){

            end=Math.max(intervals[i][1],end)   //if the next beginning value is less than the end value, then we update our current end
        }else{
            mergedArr.push([start,end])
            start=intervals[i][0]               //we adjust our start to the current start
            end=intervals[i][1]                 //we adjust our end to the current end
        }
      }
      mergedArr.push([start,end])       //we have to add the last interval
    
    return mergedArr;

  }


  // console.log(mergeArr([[1,4], [2,5], [7,9]]))
  // console.log(mergeArr([[6,7], [2,4], [5,9]]))
  // console.log(mergeArr([[1,4], [2,6], [3,5]]))
  console.log(mergeArr([[1,3], [4,5]]))
  
//   process.stdout.write('Merged intervals: ');
//   let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
//   for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
//   }
//   console.log();
  
//   process.stdout.write('Merged intervals: ');
//   result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
//   for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
//   }
//   console.log();
  
//   process.stdout.write('Merged intervals: ');
//   result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
//   for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
//   }
//   console.log();