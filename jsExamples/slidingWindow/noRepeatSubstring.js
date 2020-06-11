/*

Problem Statement #
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".


*/

//0(n) for time, 0(1) for space with worst case being 26 one for each character from A to Z
const non_repeat_substring = function(str) {
    let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

        // try to extend the range [windowStart, windowEnd]
        for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
            const rightChar = str[windowEnd];
            // if the map already contains the 'rightChar', shrink the window from the beginning so that
            // we have only one occurrence of 'rightChar'
            if (rightChar in charIndexMap) {
            // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
            // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
            
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
            
            }
            // insert the 'rightChar' into the map
            charIndexMap[rightChar] = windowEnd;
            
            // remember the maximum length so far
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }
        return maxLength;
  };



// console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);     //3
// console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);       //2
// console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);      //3


let longestSubstringOfNonRepeat=(arr)=>{
    let set= new Set();
    let left=0;
    let right=0;
    let maxSubStringlength=0;

    while(right<arr.length){
        if(!set.has(arr[right])){
            set.add(arr[right])
            maxSubStringlength=Math.max(maxSubStringlength,set.size)
            right++;
        }else{
            set.delete(arr[left]);
            left++;
        }
        // console.log(set, maxSubStringlength)
        
    }
    return maxSubStringlength
}

console.log(longestSubstringOfNonRepeat('aabccbb'));     //3
console.log(longestSubstringOfNonRepeat('abbbb'));     //2
console.log(longestSubstringOfNonRepeat('abccde'));     //3
// console.log(`Length of the longest substring: ${longestSubstringOfNonRepeat('abbbb')}`);       //2
// console.log(`Length of the longest substring: ${longestSubstringOfNonRepeat('abccde')}`);      //3