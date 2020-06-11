
// Array.flat();

//FLAT goes left to right

//Means make it a one dimensional array, combinging multi arrays into one
const matrix=[[1,2,3],[4,5,6]];
//is how deep it is
const flatArray=matrix.flat(1)
// console.log(flatArray); //[ 1, 2, 3, 4, 5, 6 ]

const matrixlonger=[[1,1], [1,[[[[[[[[[2]]]]]]]]]]];
const flatArraylonger=matrixlonger.flat(Infinity);
// console.log(flatArraylonger) //[ 1, 1, 1, 2 ]

let total=matrixlonger.flat(Infinity).reduce((a,v)=> a+v,0); 
// console.log(total) //5

// Array.flatMap();

const nums= [1,2,3];
const strs= ['one','two','three'];

const mapped= nums.map( (val,index)=> [val, strs[index]]);
// console.log(mapped) //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

const flatMapped=nums.flatMap( (val,index)=> [val, strs[index]]);
// console.log(flatMapped); //[ 1, 'one', 2, 'two', 3, 'three' ]

// Array.reduceRight();

const strss= ['t', 's', 'e', 'b'];

// reduce always moves left to right by default
let tseb= strss.reduce( (c, v)=> c+v);
// console.log(tseb) //tseb

let best=strss.reduceRight( (c,v)=> c+v); 
// console.log(best); //best

//copywithin, it mutates the array without changing the size of the array
/*
array.copyWithin(target, start, end)

Parameters:
target : The index position to copy the elements to(Required).
start : It is optional. The index position to 
start copying elements from  (default is 0).
end : It is optional. The index position to 
stop copying elements from (default is array.length).

*/

const sumNums= [0,1,2,3,4,5,6,7,8,9];

//so if you only provide a starting index, it will copy the original array from that index position
// sumNums.copyWithin(2); //[0, 1, 0, 1, 2, 3, 4, 5, 6, 7]
// console.log(sumNums)

const moreNums=[0,1,2,3,4,5,6,7,8,9];

moreNums.copyWithin(2,0,2); //[0, 1, 0, 1, 4,5, 6, 7, 8, 9]
moreNums.copyWithin(0,3); //[3, 4, 5, 6, 7, 8, 9, 7, 8, 9]
// console.log(moreNums)