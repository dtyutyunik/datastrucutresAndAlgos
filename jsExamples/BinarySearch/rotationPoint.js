/*

https://www.interviewcake.com/question/javascript/find-rotation-point?course=fc1&section=sorting-searching-logarithms\
const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];


*/

const findRotationPointTwo=(arr)=>{

let start=0;
let end=arr.length-1;
let target=arr[0];

    while(start<=end){
        let guess=Math.floor((start+end)/2)
        // console.log(`start is ${start}, guess is ${guess}, end is ${end}`)
        if(arr[guess]>target){
            start=guess+1;
        }else{
            end=guess-1;
        }

    } 
    // console.log(`start is ${start}, end is ${end}`)
    if(end===arr.length-1){ //this means that there is no rotation point
        return 'NO ROTATION POINT' 
    }

    return start;

}


// let word=['k','v','a','b','c','d','e','g','l'];
// let word2=['c','d','e','g','k','a','b']
let word3=['c','d','e','g','k','z','b']
let word4=['c','d','e','g','k','w','z']
// console.log(findRotationPointTwo(word));
// console.log(findRotationPointTwo(word2));
console.log(findRotationPointTwo(word3));
console.log(findRotationPointTwo(word4));

const findRotationPoint=(arr)=>{

let firstWord=arr[0]
let start=0;
let end=arr.length-1;


    while(start<end){

        let guess=Math.floor(start+(end-start)/2);
        console.log(`guess is ${guess}, start is ${start}, end is ${end}`)

        if(arr[guess]>=firstWord){
            start=guess;
        }else{
            end=guess;
        }

        if(start+1===end){
            break;
        }
        
    }

    return arr[end];


}

//guess= xenoepist
//start

let words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'zebra',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ];

  //xenoepist if word before that is less than it, then 
// console.log(findRotationPoint(words));