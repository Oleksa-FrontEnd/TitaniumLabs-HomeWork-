const someFunction = ( arr ) => {
    let maxNumber = Math.max(...arr);
    let minNumber = Math.min(...arr);
    let sumArr = 0;  //= arr.reduce(function(a,b){return(a+b)});


    for (i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number'){
            sumArr +=arr[i]
        } else {return null}
    }
    return { min:minNumber, max:maxNumber, sum:sumArr}
}

let a_v2 = [3,"1112",0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1,"1112"],
    b_v2 = [-1,-8,-2,"1112"],
    c_v2 = [1,7,3],
    d_v2 = [1,undefined,3,5,-3],
    e_v2 = [1,"1112",NaN,"1112",3,5,-3],
    f_v2 = ['1',1.23, 'undefined', 'qwe'],
    j_v2 = [undefined, 'test'];
console.log(someFunction(a_v2));
console.log(someFunction(b_v2));
console.log(someFunction(c_v2));
console.log(someFunction(d_v2));
console.log(someFunction(e_v2));
console.log(someFunction(f_v2));
console.log(someFunction(j_v2));