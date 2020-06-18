


//Given an array of Intergers and a target integer, return the number of all two-number of arrangmeents that sum up to the target.


function twoSum(arr,target){
    counter=0;
    let map=new Map();
    let array=[];

    for(let i=0;i<arr.length;i++){
        let difference=target-arr[i];

        if(difference===arr[i]){
            counter++;
            array.push([difference,arr[i]])
        }

        else if(map.has(difference)){
            counter+=2
            array.push([difference,arr[i]])
            array.push([arr[i],difference])
        }else{
            map.set(arr[i])
        }
    }
    console.log(array)
    return counter;
}


console.log(twoSum([1,2,3,4,5],6))      //5