//function to see if every value in array returns a squared of the number

//time complexity 0(n)
function freqCounterSort(arr1,arr2){
    
    if(arr1.length!==arr2.length){return false}
    
    arr1=arr1.sort((a,b)=>a-b);
    arr2=arr2.sort((a,b)=>a-b);
    
    for(let i=0;i<arr1.length;i++){
        
        if(arr1[i]**2!==arr2[i]){
            return false;
        }
    }
    return true;
}

// console.log(freqCounterSort([1,9,4], [2,11,5]));
// console.log(freqCounterSort([1,4,9], [1,81,16]));

//time complexity  O(n^2)
function freqCounterIndex(arr1,arr2){
    if(arr1.length!==arr2.length){return false;}

    for(let i=0;i<arr1.length;i++){
        //indexof loops through array
        let correctIndex=arr2.indexOf(arr1[i]**2);
        if(correctIndex===-1){return false;}
        
        arr2.splice(correctIndex,1)
        
    }
    return true;
}

// console.log(freqCounterIndex([1,4,9], [1,81,16]));
// console.log(freqCounterIndex([1,9,4], [2,11,5]));


//time complexity O(n)
function freqCounterObj(arr1,arr2){
    if(arr1.length!==arr2.length){return false;}

    let freqCounter1={};
    let freqCounter2={};

    for(let val of arr1){freqCounter1[val]=(freqCounter1[val] ||0)+1;}
    for(let val of arr2){freqCounter2[val]=(freqCounter2[val] ||0)+1;}

    for(let key in freqCounter1){
        //checks if object key raised to 2nd power is a key in the 2nd obj
       if(!(key**2 in freqCounter2)){return false;}

       if(freqCounter2[key**2] !== freqCounter1[key]){return false;}        
    }

    return true;
}


// console.log(freqCounterObj([1,4,9,4], [1,81,16,16]));




function anagram(str1, str2){

if(str1.length!==str2.length){return false;}

str1=[...str1].sort();
str2=[...str2].sort();

for(let i =0;i<str1.length;i++){
    if(str1[i]!==str2[i]){
    return false;        
    }
}

return true;

}

function anagramObj(str1,str2){
    if(str1.length!==str2.length){return false;}

    lookup={};
    
    for(let i=0; i< str1.length; i++){
        let letter= str1[i];
        lookup[letter] ? lookup[letter]+=1 : lookup[letter]=1;
    }
    // console.log(lookup)

    for(let i =0; i<str2.length; i++){
        let letter = str2[i];

        if(!lookup[letter]){return false;}

        else{lookup[letter]-=1;}

        console.log(lookup);
    }
    return true;  
}

// console.log(anagramObj('rat', 'car'));
console.log(anagramObj('anagram', 'nagaram'));




// console.log(anagram('', '')); // output: true
// console.log(anagram('aaz', 'zza')); // output: false
// console.log(anagram('anagram', 'nagaram')); // output: true
// console.log(anagram('rat', 'car')); // output: false
// console.log(anagram('qwerty', 'qeywrt')); // output: true
// console.log(anagram('texttwisttime', 'timetwisttext')); // output: true