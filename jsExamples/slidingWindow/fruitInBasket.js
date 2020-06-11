/*

Problem Statement #
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']



*/


//0(n) for time, 0(1) for space because at most there can only be 3 items in the basket

const fruits_into_baskets = function(fruits) {
   
    let distinctBasket={}, windowStart=0;

    for(let i=0;i<fruits.length;i++){

        distinctBasket[fruits[i]]=(distinctBasket[fruits[i]] ||0) +1;


        if(Object.keys(distinctBasket).length>2){          //it is 2 because we can only have 2 distinct baskets
            let basketCheck=fruits[windowStart]
            // console.log(basketCheck,distinctBasket)
            distinctBasket[basketCheck]--;
            if(distinctBasket[basketCheck]===0){
                delete distinctBasket[basketCheck]  //this is how we delete an obj
            }
            windowStart++;
        }

    }


    let sum=0;
    for(let x in distinctBasket){
        sum+=distinctBasket[x]  //we add up the values of each basket
    }
    
    // console.log(distinctBasket,sum)
    return sum;

    


  };


  console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']))               //3     We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
  console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']))          //5     We can put 3 'B' in one basket and two 'C' in the other basket. 