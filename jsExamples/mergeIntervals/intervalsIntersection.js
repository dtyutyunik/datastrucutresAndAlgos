/*
Problem Statement #
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Example 1:

Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.
Example 2:

Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.

    //This is the main comparison in regards to if we push
    start = max(a.start, b.start)
    end = min(a.end, b.end) 

*/


const merge = function(intervals_a, intervals_b) {
    let result = [];
    
    //movements in the array
    let i=0;
    let j=0;

    while(i<intervals_a.length && j<intervals_b.length){

        // check if intervals overlap and intervals_a[left]'s start time lies within the other intervals_b[right]
        a_overlaps_b = intervals_a[i][0] >= intervals_b[j][0] && intervals_a[i][0] <= intervals_b[j][1];
        
        // check if intervals overlap and intervals_a[left]'s start time lies within the other intervals_b[right]
        b_overlaps_a = intervals_b[j][0] >= intervals_a[i][0] && intervals_b[j][1] <= intervals_a[i][1];
        //store the intersection part
        if(a_overlaps_b || b_overlaps_a){
            result.push([Math.max(intervals_a[i][0], intervals_b[j][0]),Math.min(intervals_a[i][1], intervals_b[j][1])]);
        }
        // console.log(a_overlaps_b,b_overlaps_a)
        
        // console.log(left,right)
        //move next from the interval which is finishing first
        if(intervals_a[i][1]<intervals_b[j][1]){
            i++;
        }else{
            j++;
        }
        // console.log(i,j)

    }



    return result;
  };




// 
  console.log(merge([[1, 3], [5, 6], [7, 9]],[[2, 3], [5, 7]])) //[2, 3], [5, 6], [7, 7]
  console.log(merge([[1, 3], [5, 7], [9, 12]],[[5, 10]])) //[5, 7], [9, 10]