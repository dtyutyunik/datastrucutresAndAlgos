//globalThis, it will show you all the functions of this 
// console.log(globalThis)

//Promise.allSettled(), waits for all promises to resolve or to be rejected

// const p1= new Promise((resolve,reject)=>setTimeout(resolve,100));
// const p2= new Promise((resolve,reject)=>setTimeout(reject,300));
// const p3= new Promise((resolve,reject)=>setTimeout(resolve,2000));


//Promise.all --> waits for all 3 promises to be resoloved
//works in inspector mode but not in vscode
// Promise.allSettled([p1,p2,p3]).then(results=> results.forEach(
//     result=>console.log(result))
//     );


//Nullish Coalescing Operator ??  -> only will work with babel, not working in the processor

let x= {
    profile:{
        name: '',
        age: 0
    }
};

//if name is empty value, '',0,,undefined then it will print Dima
// console.log(x.profile.name || 'Dima') //Dima
// console.log(x.profile.age || 21) //21

//the solution 
// console.log(x.profile.name ?? 'Dima') //''
// console.log(x.profile.age ?? 21) //0


//Optional Chaining Operator ?. wont work in vscode, will work in inspector mode

let y= {
    profile:{
        name: 'John',
    //     // age: 0
    }
};

// console.log(y && y.profile && y.profile.name) //John
//solution, checks next instance of the object
// console.log(y?.profile?.name) //name


//Bigint

const max= Number.MAX_SAFE_INTEGER; //9007199254740991, max length of 16
console.log(max)

//makes it a big int because of n
const bigOne= 1n;
