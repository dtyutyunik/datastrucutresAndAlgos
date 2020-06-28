

function check(left,right){

    // while(left<right){
    if(left<=right){
        let middle=Math.floor(left+(right-left)/2)
        console.log(middle)
        if(middle===38){
            return middle;
        }else{
            return;
        }
        
        // check(0,74)
        check(0,middle-1) 
    }
       



        
        
        
    // }
    
    
    
    // return middle
}


console.log(check(100,200))
console.log(75/2)