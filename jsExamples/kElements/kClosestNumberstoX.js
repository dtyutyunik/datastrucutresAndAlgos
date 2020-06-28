/*
https://leetcode.com/problems/find-k-closest-elements/
658. Find K Closest Elements
Medium

1278

235

Add to List

Share
Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

 

Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]

*/


var findClosestElements = function(arr, k, x) {
    
    let middle=0;
    let diff=Infinity;
    if(x<arr[0]){
        middle=0
    }else if(x>arr[arr.length-1]){
        middle=arr.length-1
    }else{
      for(let i=0;i<arr.length;i++){
            if(Math.abs(x-arr[i])<diff){
                diff=Math.abs(x-arr[i]);
                middle=i
            }
           
        }
    }
        //push first instance
     let result=[arr[middle]];
    
    left=middle-1,right=middle+1;
    
    while(left>=0 || right<=arr.length-1){
        
        if(result.length===k){
            break;
        }
        
        if(arr[right]===undefined){
            result.push(arr[left])
            left--
        }else if(arr[left]===undefined){
            result.push(arr[right])
            right++
        }else{
          if(Math.abs(x-arr[left])<=Math.abs(x-arr[right])){
            result.push(arr[left]);
            left--;
        }else{
            result.push(arr[right])
            right++;
            }
        }
             
    }
    
   
    return result.sort((a,b)=>a-b)
};


/*
//Moving 

Runtime: 96 ms, faster than 79.62% of JavaScript online submissions for Find K Closest Elements.
Memory Usage: 42.5 MB, less than 27.78% of JavaScript online submissions for Find K Closest Elements.

Time Complexity: O(N - K)
Space Complexity: O(1)
*/


var findClosestElements = function(arr, k, x) {
    
    let idx = 0;
    

    while (k < arr.length - idx) {
        //removing values from end
        const last = arr.pop();
        //if ending value is less than difference of front value, then we add it back to array and we increment idx
        if (last - x < x - arr[idx]) {
            idx++;
            arr.push(last);
        }
    }
    return arr.slice(idx);
};


/*

Binary Search
Time Complexity: O(log N)
Space Complexity: O(1)

Runtime: 92 ms, faster than 90.62% of JavaScript online submissions for Find K Closest Elements.
Memory Usage: 41.6 MB, less than 49.66% of JavaScript online submissions for Find K Closest Element

https://leetcode.com/problems/find-k-closest-elements/discuss/536245/JavaScript-Binary-Search-O(log-N)-Stack-O(N-K)

*/


var findClosestElements = function(arr, k, x) {
    //-------- Main idea behind the binary search algorithm ----------//
    // 1) res will be a consecutive subarray of k size
    // 2) say if we need to pick 4 elems, now we r looking at 5 elem n1, n2, n3, n4, n5
    // we need to compare two ends: diff(x, n1) and diff(x, n5), 
    // the number with bigger diff on the end will be eleminated
    //----------------------------------------------------------------//
    // lo and hi: range of all possible start of subarray with size k + 1, so we could compare both ends
    let lo = 0, hi = arr.length - 1;
    while (lo < hi) {
        const mid = parseInt((lo + hi) / 2);
       // for subarray starting at mid with size k+1, we compare element of two ends to eliminate the loser
       if(x-arr[mid] > arr[mid+k]-x) {
        lo = mid+1; // arr[mid] is the one further away from x, eliminate range[lo, mid]
        } else {
            hi = mid; // arr[mid+k] is the one further away, all [mid, hi] will have simiar situation, elimiate them
        }
    }
    return arr.slice(lo, lo + k);
};