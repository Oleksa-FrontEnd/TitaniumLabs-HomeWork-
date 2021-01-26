/* forEach */
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
for (let arr of array){
    console.log(arr)
}

/* map */
let arr = [3, 5, 42];

let myMap = function (){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]*2);
    }
}
myMap(arr);

/* sort */
let mySort = function compare(a, b) {
    //a меньше b по некоторому критерию сортировки
    if (a < b) {
        return -1;
    }
    //a больше b по некоторому критерию сортировки
    if (a > b) {
        return 1;
    }
    // a должно быть равным b
    return 0;
}
