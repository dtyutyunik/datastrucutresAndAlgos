/*

Problem Statement #
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Example 1:

Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.
Example 2:

Input: ['a', 'c', 'f', 'h'], key = 'b'
Output: 'c'
Explanation: The smallest letter greater than 'b' is 'c'.
Example 3:

Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.
Example 4:

Input: ['a', 'c', 'f', 'h'], key = 'h'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.

*/



const search_next_letter = function(letters, key) {
    // TODO: Write your code here
    if(key>letters[letters.length-1] || key<letters[0]){
        return letters[0]
    }
    let left=0, right=letters.length-1;

    while(left<=right){
        let middle=left+Math.floor((right-left)/2)

        if(letters[middle]===key){
            if(middle===letters.length-1){
                return letters[0]
            }else{
                return letters[middle+1]
            }
        }
        if(letters[middle]<key){
            left=middle+1
        }else{
            right=middle-1
        }
    }
    //because left is middle+1
    return letters[left]

  };
  
  
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))    //h
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))    //c
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))    //a
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'h'))    //a
  