//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,


function fib(num){
    let arr=[1,1,2]

        for(let i=3;i<num;i++){
            arr[i]=arr[i-1]+ arr[i-2]
        }
    
        console.log(arr)
    return arr[num-1];
}



console.log(fib(3));
console.log(fib(4));
console.log(fib(99));


