/*

Words Concatenation (hard) #
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Example 1:

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".
Example 2:

Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".

*/


const find_word_concatenation = function(str, words) {
    if (words.length === 0 || words[0].length === 0) {
        return [];
      }
    
      wordFrequency = {};
    
      words.forEach((word) => {
        if (!(word in wordFrequency)) {
          wordFrequency[word] = 0;
        }
        wordFrequency[word] += 1;
      });

      console.log(wordFrequency)
    
      const resultIndices = [],
        wordsCount = words.length;          //amount of words
      wordLength = words[0].length;         //length of each word
      console.log(wordsCount,wordLength)
    
      for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
        const wordsSeen = {};
        
        for (j = 0; j < wordsCount; j++) {
          next_word_index = i + j * wordLength;
          // Get the next word from the string
          word = str.substring(next_word_index, next_word_index + wordLength);
          if (!(word in wordFrequency)) { // Break if we don't need this word
            break;
          }
    
          // Add the word to the 'wordsSeen' map
          if (!(word in wordsSeen)) {
            wordsSeen[word] = 0;
          }
          wordsSeen[word] += 1;
    
    
          // no need to process further if the word has higher frequency than required
          if (wordsSeen[word] > (wordFrequency[word] || 0)) {
            break;
          }
    
          if (j + 1 === wordsCount) { // Store index if we have found all the words
            resultIndices.push(i);
          }
        }
      }
    
      return resultIndices;

  };

  

  console.log(find_word_concatenation('catfoxcat', ["cat", "fox"]))         //[0,3]     The two substring containing both the words are "catfox" & "foxcat".
//   console.log(find_word_concatenation('catcatfoxfox', ["cat", "fox"]))      //[3]       The only substring containing both the words is "catfox"