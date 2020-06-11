let sample=[1,1,2,3,4,5,5,4,7,9];
let unique= new Set(sample); // Set { 1, 2, 3, 4, 5, 7, 9 }
unique=Array.from(unique);
// console.log(unique) //[1, 2, 3, 4,5, 7, 9]



var addTo=function(passed){

    var add=function(inner){
        return passed+inner;
    }
    return add;
}

// var 


console.log(addTo(3)(3));