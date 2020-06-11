/*

String Anagrams (hard) #
Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
*/



const find_string_anagrams = function(str, pattern) {
    result_indexes = [];

    patternObj={};
    let matched=0;
    let charIncrease=0;

    for(let i=0;i<pattern.length;i++){
        patternObj[pattern[i]]=(patternObj[pattern[i]]||0)+1
    }

    for(let i=0;i<str.length;i++){

        if(str[i] in patternObj){
            
            patternObj[str[i]]--;
            result_indexes.push(i)
            if(patternObj[str[i]]===0){
                matched++
            }
            
        }
        
        if(matched===Object.keys(patternObj).length){
            break;
        }
        
        //-1 since we start from 0 as an index
        if(i>=pattern.length-1){
            let firstchar=str[charIncrease];
            
            if(firstchar in patternObj){
                if(patternObj[firstchar]===0){
                    matched--;
                }
                patternObj[firstchar]++
                result_indexes.shift();
            }
            charIncrease++
        }
        // console.log('matched',matched,result_indexes, patternObj, 'i is', i)

    }
    


    return result_indexes;
  };


  console.log(find_string_anagrams('ppqp','pq'))            //[1,2]
  console.log(find_string_anagrams('abbcabc','abc'))            //[2,3,4]