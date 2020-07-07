/*

Search in Rotated Array (medium) #
Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.

Example 1:

Input: [10, 15, 1, 3, 8], key = 15
Output: 1
Explanation: '15' is present in the array at index '1'.
     
 Original array:  [1, 3, 8, 10, 15]
 Array after 2 rotations:  [10, 15, 1, 3, 8]
      

Example 2:
Input: [4, 5, 7, 9, 10, -1, 2], key = 10
Output: 4
Explanation: '10' is present in the array at index '4'.

    Original array:[, -1, 2,4, 5, 7, 9, 10]
    Array after 5 rotations: [4, 5, 7, 9, 10, -1, 2]


*/

const search_rotated_array = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] === key) {
        return mid;
      }
  
      if (arr[start] <= arr[mid]) { // left side is sorted in ascending order
        if (key >= arr[start] && key < arr[mid]) {
          end = mid - 1;
        } else { // key > arr[mid]
          start = mid + 1;
        }
      } else { // right side is sorted in ascending order
        if (key > arr[mid] && key <= arr[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    // we are not able to find the element in the given array
    return -1;
}


  
  console.log(search_rotated_array([10, 15, 1, 3, 8], 15))          //1
  console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10))    //4


  /*

Similar Problems #
Problem 1 #
How do we search in a sorted and rotated array that also has duplicates?

The code above will fail in the following example!

Example 1:

Input: [3, 7, 3, 3, 3], key = 7
Output: 1
Explanation: '7' is present in the array at index '1'.

  */
  
 function search_rotated_with_duplicates(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] === key) {
        return mid;
      }
  
      // the only difference from the previous solution,
      // if numbers at indexes start, mid, and end are same, we can't choose a side
      // the best we can do, is to skip one number from both ends as key !== arr[mid]
      if (arr[start] === arr[mid] && arr[end] === arr[mid]) {
        start += 1;
        end -= 1;
      } else if (arr[start] <= arr[mid]) { // left side is sorted in ascending order
        if (key >= arr[start] && key < arr[mid]) {
          end = mid - 1;
        } else { // key > arr[mid]
          start = mid + 1;
        }
      } else { // right side is sorted in ascending order
        if (key > arr[mid] && key <= arr[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    // we are not able to find the element in the given array
    return -1;
  }
  
  console.log(search_rotated_with_duplicates([3, 7, 3, 3, 3], 7));