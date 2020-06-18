/*

Problem Statement #
Given a string, find all of its permutations preserving the character sequence but changing case.

Example 1:

Input: "ad52"
Output: "ad52", "Ad52", "aD52", "AD52" 
Example 2:

Input: "ab7c"
Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"
*/

/*
Since we can have 2^N permutations at the most and while processing each permutation we convert it into a character array, the overall time complexity of the algorithm will be O(N*2^N)
*/
const find_letter_case_string_permutations = function(str) {
    permutations = [];
    //we push the first instance
    permutations.push(str);

    for(let i=0;i<str.length;i++){
        if (isNaN(parseInt(str[i], 10))) { // only process characters, skip digits
            // we will take all existing permutations and change the letter case appropriately
            const n = permutations.length;
            
            for (j = 0; j < n; j++) {
              const chs = permutations[j].split(''); // string to array, also creates a copy of the array
              console.log(chs[i])
              // if the current character is in upper case, change it to lower case or vice versa
              if (chs[i] === chs[i].toLowerCase()) {
                chs[i] = chs[i].toUpperCase();
              } else {
                chs[i] = chs[i].toLowerCase();
              }
              console.log(chs)
              permutations.push(chs.join(''));  //combines the elements in the array and returns the new string
            }
            console.log('done')
          }
          
    }


    return permutations;
  };
  
  
  console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
//   console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)
  