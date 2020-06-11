/*

Minimum Window Sort (medium) #
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Example 1:

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
Example 2:

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
Example 3:

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted

Example 4:

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.

*/


const shortest_window_sort = function(arr) {
    
    let low = 0,
    high = arr.length - 1;


    // find the first number out of sorting order from the beginning
    while ((low < arr.length - 1 && arr[low] <= arr[low + 1])) {
        low += 1;
    }

    if (low === arr.length - 1) { // if the array is sorted
        return 0;
    }

    // find the first number out of sorting order from the end
    while (high > 0 && arr[high] >= arr[high - 1]) {
        high -= 1;
    }
    
    /////////////////////////////////////////////////////////////////////////
    //The above portion we find the first instance where it is not in order//
    /////////////////////////////////////////////////////////////////////////

    // find the maximum and minimum of the subarray
    let subarrayMax = -Infinity,
    subarrayMin = Infinity;

    //+1 to include the highest value before it broke
    for (k = low; k < high + 1; k++) {
        subarrayMax = Math.max(subarrayMax, arr[k]);
        subarrayMin = Math.min(subarrayMin, arr[k]);
      }


    //   console.log(`low is in position ${low}, high is in position ${high}, subarrayMin value is ${subarrayMin}, subArrayMax value is ${subarrayMax}`)

      // extend the subarray to include any number which is bigger than the minimum of the subarray
        //so now we are backtracking to the first numbers before it broke originally
        while (low > 0 && arr[low - 1] > subarrayMin) {
            low -= 1;
        }

        // extend the subarray to include any number which is smaller than the maximum of the subarray
        //so now we are backtracking to the first numbers before it broke originally
        while (high < arr.length - 1 && arr[high+1] < subarrayMax) {
            high += 1;
        }

        // console.log(low,high)
        return high - low + 1;

  };

  console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12])) //5
//   console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10])) //5
  
//   console.log(shortest_window_sort([1, 2, 3])) //0
//   console.log(shortest_window_sort([3,2,1])) //3