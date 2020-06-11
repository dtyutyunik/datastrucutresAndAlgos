/*

Problem Statement #
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".


*/

//0(n) for time, 0(n) for space

const longest_substring_with_k_distinct = function(str, k) {
    // TODO: Write your code here

    let charFrequency={};
    let maxLength = 0,windowStart = 0;


    for(let i=0;i<str.length;i++){

        charFrequency[str[i]]=(charFrequency[str[i]]||0)+1; //we add to the obj
        
        

        // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
        while (Object.keys(charFrequency).length > k) {
            const leftChar = str[windowStart];      //we increment in the array
            console.log(leftChar,charFrequency)
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
              delete charFrequency[leftChar];   //so if the character 
            }
            windowStart += 1; // shrink the window
          }
          // remember the maximum length so far
          maxLength = Math.max(maxLength, i - windowStart + 1);

        

    }
    console.log(charFrequency)
    return maxLength;
    // return -1;
  };


//   console.log(longest_substring_with_k_distinct('araaci',2))        //4
//   console.log(longest_substring_with_k_distinct('araaci',1))        //2
  console.log(longest_substring_with_k_distinct('cbbebi',3))        //5