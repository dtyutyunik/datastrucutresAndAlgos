function reverseStringReducer(str){
    //[..str] breaks it into array, reduce right takes array backwards
    // return [...str].reduceRight((a,b)=>a+b,'');
    return str.reduceRight((a,b)=>a+b,'');
}

console.log(reverseStringReducer(["h","e","l","l","o"]));

// console.log(reverseStringReducer('hat')); //tah


function reverseStringForloop(str){
    let newStr='';
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    return newStr;
}

// console.log(reverseStringForloop('dog')) //god

function reverseStringRecursion(str) {
    if (str === "")
      return "";
    // else
      return reverseStringRecursion(str.substr(1)) + str.charAt(0);
  }
  

// console.log(reverseStringRecursion('dog'))
