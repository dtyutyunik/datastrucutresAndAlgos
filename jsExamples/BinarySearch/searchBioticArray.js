/*

Search Bitonic Array (medium) #
Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.

Example 1:

Input: [1, 3, 8, 4, 3], key=4
Output: 3
Example 2:

Input: [3, 8, 3, 1], key=8
Output: 1
Example 3:

Input: [1, 3, 8, 12], key=12
Output: 3
Example 4:

Input: [10, 9, 8], key=10
Output: 0


*/


const search_bitonic_array = function(arr, key) {
    let start=0,end=arr.length-1;
    let maxPoint=findMax(arr);
    
    if(key>arr[maxPoint]){
        return -1;
    }

    let left=binarySearch(arr,start,maxPoint,key);

    if(left!==-1){
        return left;
    }else{
        return binarySearch(arr,maxPoint,end,key)
    }

    


   
  };

  function findMax(arr){
        let start=0,end=arr.length-1;

        while(start<end){
            let middle=start+Math.floor((end-start)/2);

            if(arr[middle+1]>arr[middle]){
                start=middle+1
            }else{
                end=middle;
            }
        }
        return start;
  }

  function binarySearch(arr,start,end,key){
      while(start<=end){
          let middle=start+Math.floor((end-start)/2);

          if(arr[middle]===key){
              return middle;
          }else if(arr[middle]<key){
              start=middle+1
          }else{
              end=middle-1;
          }

      }
      return -1;
  }

  
  
  
  console.log(search_bitonic_array([1, 3, 8, 4, 3], 4))     //3
  console.log(search_bitonic_array([3, 8, 3, 1], 8))        //1
  console.log(search_bitonic_array([1, 3, 8, 12], 12))      //3
  console.log(search_bitonic_array([10, 9, 8], 10))         //0
  console.log(search_bitonic_array([10, 9, 8], 11))         //-1
  