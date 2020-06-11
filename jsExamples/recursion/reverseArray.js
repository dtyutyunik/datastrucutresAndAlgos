
//time complexity 0(n), space complexting 0(1)
let reverseArray= (arr)=>{
    for(let i=0;i<arr.length/2;i++){
        
        //[a,b]=[b,a] this switches them 
        [arr[i], arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]]
    }

    return arr;
}


// console.log(reverseArray(["h","e","l","l","o"]));

//time complexity 0(n), space complexting 0(n)
let reverseArrayRecursion=(arr)=>{

    if(arr.length===0){
        return []
    }
    
    //removes the last element in the array
    // return arr.pop()+ (reverseArrayRecursion(arr)) //olleh

    
    return [arr.pop()].concat(reverseArray(arr)) //[ 'o', 'l', 'l', 'e', 'h' ]

}

console.log(reverseArrayRecursion(["h","e","l","l","o"]));