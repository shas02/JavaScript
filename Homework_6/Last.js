let numbers=(arr,key)=>{
    let newArray=[];
    let MinIndex, MaxIndex;
    for (const arrElement of arr) {
        if(arrElement>10){
            continue;
        }else {
            newArray.push(arrElement);
        }
    }
    let array=newArray.reduce((acc,value,index)=>{
        if(value===key){
            acc+=index;
        }
        return acc;
    },[])
    if(array.length===0){
        console.log(-1);
        return;
    }
    let arr2=array.split("");
    arr2?console.log(`MinIndex:${arr2[0]},MaxIndex:${arr2[arr2.length-1]}`):-1
}
// Arr=[1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
numbers([1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14],7);