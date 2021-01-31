/* forEach */
console.log('***forEach***');
let arr = [3, 5, 42];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log('***forEach***');
let array2 = [3, 5, 42];
for (let arr of array2){
    console.log(arr)
}
console.log('***map***');
/* map */
let myMap = function (){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]*2);
    }
}
myMap(arr);

/* sort */
console.log('***sort***');
/* генерируем массив из 100 чисел в диапазоне от -1000 до 1000
const array = Array(100).fill(null).map(() => Math.floor(Math.random()*2000) - 1000);
*/
const array = [714, 519, -895, -797, -389, 507, -392, -707, -787, 504, -884, -177, -159, -619, 641, 641, -448, -614, -462, -709, -853, 216, -103, -158, 498, -872, 643, -327, 369, -491, -81, -306, 599, 364, -905, 754, -784, -983, -562, -315, -588, -632, 847, 824, -373, -230, -275, -10, 152, -931, 977, 723, -676, -272, 825, -562, 535, 338, -616, -453, -125, 777, -192, 202, 358, 821, 489, 646, 933, -169, 930, -799, -274, 0, -926, 2, 73, 91, -288, 815, -907, -451, 417, -312, 249, -475, 281, 508, 439, -724, -474, 703, 156, -882, -498, 684, -427, 185, 951, -890];

bubleSort(array);
function bubleSort(array) {
    let n = array.length;
    for (j = 0; j < n; j++){
        for (let i = 0; i < n - 1 - j; i++) {
           if( array[i] > array[i + 1]) {
               const buff = array[i];
               array[i] = array[i + 1];
               array[i + 1] = buff;
           }
        }
    }
    console.log(array);
}

/*let A = [23, 2, 11, 1, 15];

function BubbleSort(A)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
    { for (var j = 0; j < n-1-i; j++)
    { if (A[j+1] < A[j])
    { var t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
    }
    }
    return A;    // На выходе сортированный по возрастанию массив A.
}
BubbleSort(A);
*/