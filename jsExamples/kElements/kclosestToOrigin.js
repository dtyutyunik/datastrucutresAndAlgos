/*
https://leetcode.com/problems/k-closest-points-to-origin/


973. K Closest Points to Origin
Medium

1705

112

Add to List

Share
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)

*/


/*
Runtime: 156 ms, faster than 96.51% of JavaScript online submissions for K Closest Points to Origin.
Memory Usage: 46.3 MB, less than 83.57% of JavaScript online submissions for K Closest Points to Origin.

*/
var kClosest = function(points, K) {
    quickSelect(points, K, 0, points.length - 1)
    return points.slice(0, K)
};

function quickSelect(points, K, low, high) {
        
    const partPoint = partition(points, low, high)
    
    if (K - 1<partPoint) {
        quickSelect(points, K, low, partPoint - 1)
    } else if(K-1>partPoint) {
        quickSelect(points, K, partPoint + 1, high)
        
    }
    
    return points
}

function partition(points, low, high) {
    
    let pivotPoint = low;
     
    for(i=low+1; i<=high; i++){
        if (getDist(points[i]) < getDist(points[low])) {
            pivotPoint++
            [points[i],points[pivotPoint]]=[points[pivotPoint],points[i]]
            
        }

    }
    
    [points[low],points[pivotPoint]]=[points[pivotPoint],points[low]]
    
    return pivotPoint
}


function getDist(point) {
    return point[0] * point[0] + point[1] * point[1]
}
