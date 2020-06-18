/*

240. Search a 2D Matrix II
Medium

2984

75

Add to List

Share
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.


*/


/*
0(n*k), 0(1)
Runtime: 2232 ms, faster than 5.06% of JavaScript online submissions for Search a 2D Matrix II.
Memory Usage: 38.3 MB, less than 43.45% of JavaScript online submissions for Search a 2D Matrix II.
*/
var searchMatrix = function(matrix, target) {
    if(matrix.length===0){return false;}
    
    let yLength=matrix.length-1;
    let xLength=matrix[0].length-1;
    let y=0
    
    while(y<=yLength){
        
        let lowestIntofRow=matrix[y][0];
        let maxIntofRow=matrix[y][xLength]
        
        let x=0;
        while((target>=lowestIntofRow||target<=maxIntofRow) && x<=xLength){
            if(target===matrix[y][x]){
                return true;
            }
            x++;    
        }
        y++;
        
        
    }
    return false;
};


/*
Runtime: 356 ms, faster than 25.82% of JavaScript online submissions for Search a 2D Matrix II.
Memory Usage: 39.9 MB, less than 22.28% of JavaScript online submissions for Search a 2D Matrix II.


*/

var searchMatrix = function(matrix, target) {
    if(matrix.length===0){return false;}
    
    let yLength=matrix.length-1;
    let xLength=matrix[0].length-1;
    let y=0
    
    while(y<=yLength){
        
        let lowestIntofRow=matrix[y][0];
        let maxIntofRow=matrix[y][xLength]
            
        let x=0;
        //only checks the row if the number could be found in that row
        if(target>=lowestIntofRow ||target<=maxIntofRow){
            
            let mid=Math.floor(matrix[y].length/2) 
            
            if(matrix[y][mid]===target){
                return true;
            }
            
            if(matrix[y][mid]>target){
                while(mid>=0){
                   if(matrix[y][mid]===target){return true;} 
                    mid--
                }
            }
            else if(matrix[y][mid]<target){
                while(mid<matrix[y].length){
                    if(matrix[y][mid]===target){return true;}
                    mid++;  
                   
                }
            }
        }
        
        y++;       
    }
    
    return false;
};




/*
Runtime: 80 ms, faster than 89.97% of JavaScript online submissions for Search a 2D Matrix II.
Memory Usage: 38.7 MB, less than 35.94% of JavaScript online submissions for Search a 2D Matrix II.

Approach 4: Search Space Reduction
Intuition

Because the rows and columns of the matrix are sorted (from left-to-right and top-to-bottom, respectively), we can prune \mathcal{O}(m)O(m) or \mathcal{O}(n)O(n) elements when looking at any particular value.

Algorithm

First, we initialize a (row, col)(row,col) pointer to the bottom-left of the matrix.[1] Then, until we find target and return true (or the pointer points to a (row, col)(row,col) that lies outside of the dimensions of the matrix), we do the following: if the currently-pointed-to value is larger than target we can move one row "up". Otherwise, if the currently-pointed-to value is smaller than target, we can move one column "right". It is not too tricky to see why doing this will never prune the correct answer; because the rows are sorted from left-to-right, we know that every value to the right of the current value is larger. Therefore, if the current value is already larger than target, we know that every value to its right will also be too large. A very similar argument can be made for the columns, so this manner of search will always find target in the matrix (if it is present).

Check out some sample runs of the algorithm in the animation below:
*/

//here we start in the last cell of first row, if number is less than that cell, x--, 
//otherwise y++ we incrase to next row

//(0(n+m), 0(1)
var searchMatrixBest = function(matrix, target) {
    if (matrix.length === 0) return false
    let y = 0, x = matrix[0].length - 1
    //we start from the back of y and beginning of i
    
    while (y < matrix.length && x >= 0) {
        console.log(matrix[y][x])
      if (matrix[y][x] === target) { 
          return true 
      } else if (matrix[y][x] > target) {
          x--
      } else { 
          y++ 
      }
    }
    return false
  };