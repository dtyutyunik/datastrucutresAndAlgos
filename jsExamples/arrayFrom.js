
/*
Array.from way
Can create arrays from something
*/

const fromScratch= Array.from({length: 5}, (v,i)=>i);//[ 0, 1, 2, 3, 4 ]
const fromScratch1= Array.from({length: 5}, (v,i)=>'');//[ '', '', '', '', '' ]

const fromScratch2= Array.from({length: 5}, (v,i)=>i);
console.log(fromScratch)

//To get unique values
const ary=[1,1,2];
const unique=Array.from(new Set(ary));
console.log(unique)


/*
Original ways 
*/

const fromScratch4=new Array(6)//[ <6 empty items> ]
const fromScratch5=new Array(6).fill(0)//[ 0, 0, 0, 0, 0, 0 ]
const fromScratch6=new Array(6).fill(0).map((v,i)=>i)//[ 0, 1, 2, 3, 4, 5 ]
// console.log(fromScratch)

const ary1=[1,1,2];
const unique1=[...new Set(ary)];
// console.log(unique)

