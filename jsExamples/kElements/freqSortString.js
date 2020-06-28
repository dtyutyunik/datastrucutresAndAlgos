/*
Problem Statement #
Given a string, sort it based on the decreasing frequency of its characters.

Example 1:

Input: "Programming"
Output: "rrggmmPiano"
Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.
Example 2:

Input: "abcbab"
Output: "bbbaac"
Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.

https://leetcode.com/problems/sort-characters-by-frequency/

451. Sort Characters By Frequency


*/

const sort_character_by_frequency = function(str) {
   
    let freq={}
    let max=0;
    
    for(let i=0;i<s.length;i++){
        freq[s[i]]=(freq[s[i]]||0)+1
        max=Math.max(max,freq[s[i]])
            
    }
    
    let arr=Array(max+1).fill().map(()=>[])
    
    
    Object.keys(freq).map(key=>{
        arr[freq[key]].push(key.repeat(freq[key]))
    })
    
    let word=''
    for(let i=arr.length-1;i>=0;i--){
       let temp=arr[i].join('')
        
            word+=temp
        
        
    }
    return word;
    
    
  };
  
  
  console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("Programming")}`)
  console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("abcbab")}`)
  