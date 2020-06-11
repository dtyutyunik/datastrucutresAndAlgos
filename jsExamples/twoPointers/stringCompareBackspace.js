/*

Comparing Strings containing Backspaces (medium) #
Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.



*/



const backspace_compare = function(str1, str2) {

    let left1=0;
    let right1=0;
    let left2=0;
    let right2=0;
        
    for(let i=0;i<str1.length;i++){
    
        if(str1[i]==='#'){
            
            left1=i-1;
            right1=i;
            str1=str1.replace(str1[right1],'')  //0(1) based on implementation
            str1=str1.replace(str1[left1],'');  //0(1) based on implementation
            i=str1.length-2;//backtrack i 2 spaces for which was removed
        }
    }

    for(let i=0;i<str2.length;i++){

        if(str2[i]==='#'){
            
            left2=i-1;
            right2=i;
            str2=str2.replace(str2[right2],'')
            str2=str2.replace(str2[left2],'')
            i=str2.length-2; //backtrack i 2 spaces for which was removed
    
        }
    
    }
    
    if(str1===str2){
        return true;
    }
   

    return false;
  };



  console.log(backspace_compare("xy#z","xzz#")) //true
  console.log(backspace_compare("xy#z","xyz#")) //false
  console.log(backspace_compare("xp#","xyz##")) //true
  console.log(backspace_compare("xywrrmp","xywrrmu#p")) //true