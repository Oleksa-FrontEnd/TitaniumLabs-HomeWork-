const someFunction = ( arr ) => {
    let newArr = arr.filter(Number);
    //console.log (newArr);
    function deleteString(value) {
        return (typeof value === 'number');
    }

    let newArrayNumber = newArr.filter(deleteString);
    //console.log(newArrayNumber)

        let minNumber = Math.min(...newArrayNumber);
        let maxNumber = Math.max(...newArrayNumber);
        let sumArr = null;
            for (i = 0; i < newArrayNumber.length; i++){
                sumArr += newArrayNumber[i]
            }
    return { min:minNumber, max:maxNumber, sum:sumArr}
}

let a_v2 = ["555","112",0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1,"112"],
    b_v2 = [-1,-8,-2,"1112"],
    c_v2 = [1,-7,3],
    d_v2 = [1,3,5,-3],
    e_v2 = [1,"11132",NaN,"1112",3,5,-3],
    f_v2 = ['1',1.23, 'undefined', 'qwe'],
    j_v2 = [undefined, 'test'];
console.log(someFunction(a_v2));
console.log(someFunction(b_v2));
console.log(someFunction(c_v2));
console.log(someFunction(d_v2));
console.log(someFunction(e_v2));
console.log(someFunction(f_v2));
console.log(someFunction(j_v2));