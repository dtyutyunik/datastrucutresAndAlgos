/*
Problem Statement #
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Example 1:

Input: 23   
Output: true (23 is a happy number)  
Explanations: Here are the steps to find out that 23 is a happy number:

2^2+3^2=4+9=13
1^2+3^3=1+9=10
1^2+0^2=1+0=1


Input: 12   
Output: false (12 is not a happy number)  
Explanations: Here are the steps to find out that 12 is not a happy number:

1^2+2^2=1+4=5
5^2=25
2^2+5^2=4+25=29
2^2+9^2=4+81=85
8^​2+5^​2= 64 + 25 = 89     //this number is repeated later
8^2+9^2= 64 + 81 = 145
1^2+4^2+5^2=1 + 16 + 25 = 42
4^2+2^2=16+4=20
2^2+0^2=4+0=4
4^2=16
1^2+6^2=1+36=37
3^2+7^2=9+49=58
5^2+8^2=25+64=89            //since is a repetition of a prior number then it wont be a happy number



*/

/*
This means:

N1 < 81MN1<81M
As we know M = log(N+1)M=log(N+1)
Therefore: N1 < 81 * log(N+1)N1<81∗log(N+1) => N1 = O(logN)N1=O(logN)
This concludes that the above algorithm will have a time complexity of O(logN)O(logN).

Space Complexity #
The algorithm runs in constant space O(1)O(1).

*/

const find_happy_number = function(num) {
    
    let slow=num;
    let fast=num;

    while(true){
        slow=find_square_sum(slow)  //move one step
        // console.log('slow',slow)
        fast= find_square_sum(find_square_sum(fast)) //move two steps
        // console.log('fast',fast)
        if(slow===fast){ //found the cycle
            break;
        }
    }
    return slow===1; //see if the cycle is stuck on the number 1;
    
  };

  function find_square_sum(num){
      let sum=0;
      while(num>0){
          let digit=num%10;     //we grab the last number
        //   console.log(digit)
          sum+=digit*digit;     //we multiply it byitself
        //   console.log(sum)
          num=Math.floor(num/10)    //now we remove the last number
        //   console.log(num)
      }
      return sum;
  }






  
  
//   console.log(`${find_happy_number(23)}`)
  console.log(`${find_happy_number(0)}`)