/*

https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk

Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.

Input: ['a', 'c', 'f', 'h'], key = 'b'
Output: 'c'
Explanation: The smallest letter greater than 'b' is 'c'.

Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.

Input: ['a', 'c', 'f', 'h'], key = 'h'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.


*/


const search_next_letter = function(letters, key) {
    // TODO: Write your code here

    let start=0;
    let end=letters.length-1
   //if key is lower then lowest value or higher than highest value since it is circular than it will be the first value
   if(key<letters[0] || key>letters[end]){
       return letters[0]
   }

   while(start<=end){
       let mid=Math.floor((start+end)/2);

       if(key<letters[mid]){
           end=mid-1;
       }else{
           start=mid+1;
       }
   }
 
   // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
    return letters[start%letters.length]
    
  };
  
  
//   console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f')) //h
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b')) //c
//   console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm')) //a   
//   console.log(search_next_letter(['a', 'c', 'f', 'h'], 'h')) //a   
//   console.log(search_next_letter(['c', 'd', 'f', 'h'], 'a')) //a   