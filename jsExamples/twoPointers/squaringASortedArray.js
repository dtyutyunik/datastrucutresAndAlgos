/*
Problem Statement #
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]

*/


//Big 0(n) for time, 0(n) for space
const make_squares = function(arr) {
    
    let squares=new Array(arr.length).fill(0);
    let left=0;
    let right=arr.length-1;
    let highestSquareIdx=arr.length-1;

    while(left<=right){
        let leftSquare=arr[left]**2;
        let rightSquare=arr[right]**2;
        
        if(leftSquare>rightSquare){
            squares[highestSquareIdx]=leftSquare;        
            left++;
        }else{
            squares[highestSquareIdx]=rightSquare;
            right--;
        }
        highestSquareIdx--;

    }

    return squares;
  };

  
                            // -2      0 
  console.log(make_squares([-2, -1, 0, 2, 3])) //[0, 1, 4, 4, 9]
//   console.log(make_squares([-3, -1, 0, 1, 2])) //[0 1 1 4 9]




  //we go through array
  //we get the value **2
  //we check 

  //4
  // if(val<smallestIndex){
    //then smallesindex=val
    //then sma  
  
 