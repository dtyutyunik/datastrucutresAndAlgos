function jumpingOnClouds(c) {

    let counter=0;
    
    for(let i=0;i<c.length-1;i++){   
        if(c[i+2]===0 && (i+2)< c.length){
            counter++;
            i++
        }else{
            counter++;
        }
    }    
    return counter;
    }
    
console.log(jumpingOnClouds([ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0])); //6   length 10
console.log(jumpingOnClouds([ 0, 0, 1, 0, 0, 1, 0])); //4   length 7


