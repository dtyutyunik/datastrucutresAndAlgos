/*

Problem Statement #
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".


*/

const length_of_longest_substring = function(str, k) {
    
    let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

    // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {

    frequencyMap[str[windowEnd]]=(frequencyMap[str[windowEnd]] ||0) +1

    console.log(frequencyMap[str[windowEnd]],frequencyMap)
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[str[windowEnd]]);


    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] --;
      windowStart ++;
      
    }
    // console.log('max leter count',maxRepeatLetterCount,frequencyMap, 'window end', windowEnd - windowStart + 1)

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;

  };



// console.log(length_of_longest_substring('aabccbb', 2));     //5
console.log(length_of_longest_substring('abcbcb', 1));       //4
// console.log(length_of_longest_substring('abccde', 1));      //3