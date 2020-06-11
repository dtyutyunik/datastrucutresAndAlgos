/*

Smallest Window containing Substring (hard) #
Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"
Example 2:

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".
Example 3:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.

*/


function find_substring(str, pattern) {
    let windowStart = 0,
      matched = 0,
      substrStart = 0,
      minLength = str.length + 1,
      charFrequency = {};
  
    for (i = 0; i < pattern.length; i++) {
      
      const chr = pattern[i];

      if (!(chr in charFrequency)) {
        charFrequency[chr] = 0;
      }
      charFrequency[chr] ++;

    }
  
    // console.log(charFrequency)
    // try to extend the range [windowStart, windowEnd]
    for (i = 0; i < str.length; i++) {
      
      if (str[i] in charFrequency) {
        charFrequency[str[i]] --;

        if (charFrequency[str[i]] >= 0) { // Count every matching of a character, if its negative wont be counter
          matched ++;
        //   console.log('matched')
        }
      }

    //   console.log(charFrequency ,'matched', matched)
  
      // Shrink the window if we can, finish as soon as we remove a matched character
      while (matched === pattern.length) {
          console.log(charFrequency)
        if (minLength > i - windowStart + 1) {
          minLength = i - windowStart + 1;
          substrStart = windowStart;
        }
  
        const leftChar = str[windowStart];
        windowStart ++;
        if (leftChar in charFrequency) {
          // Note that we could have redundant matching characters, therefore we'll decrement the
          // matched count only when a useful occurrence of a matched character is going out of the window
          if (charFrequency[leftChar] === 0) {
            matched --;
          }
          charFrequency[leftChar] ++;
        }
      }
    }
  
    if (minLength > str.length) {
      return '';
    }
    return str.substring(substrStart, substrStart + minLength);
  }
  



//   console.log(find_substring('aabdec','abc'))           //'abdec'
//   console.log(find_substring('abdabca','abc'))          //'abc'
//   console.log(find_substring('adcad','abc'))            //''