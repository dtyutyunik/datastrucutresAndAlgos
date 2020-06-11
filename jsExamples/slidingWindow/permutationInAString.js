/*
Permutation in a String (hard) #
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.


*/


const find_permutation = function(str, pattern) {
    // TODO: Write your code here
    let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }
  
      for (i = 0; i < str.length; i++) {
        const rightChar = str[i];
        if (rightChar in charFrequency) {
          // Decrement the frequency of matched character
          charFrequency[rightChar] --;
          if (charFrequency[rightChar] === 0) {
            matched ++;
          }
        }

        if (matched === Object.keys(charFrequency).length) {
          return true;
        }

        // console.log(charFrequency,i, 'matched', matched, 'window start', windowStart)

        // Shrink the sliding window, pattern.length-1 because we start from 0, so 0,1 would be a length of 2
        if (i >= pattern.length - 1) {
          leftChar = str[windowStart];
          
          
          windowStart ++; //move window left

          if (leftChar in charFrequency) {
            if (charFrequency[leftChar] === 0) {    //if it is already 0, then that means due to sliding window it is no longer a match as it has past the consecutive amount of time
              matched --;
            }

            charFrequency[leftChar] ++;   //here we update the frequency back up 1
          }
        }
      }

    return false;


  };



  console.log(find_permutation('oidbcaf','abc'))            //true      contains bca
  // console.log(find_permutation('odicf','dc'))               //false
//   console.log(find_permutation('bcdxabcdy','bcdyabcdx'))    //true
  // console.log(find_permutation('aaacb','abc'))              //true      contains acb