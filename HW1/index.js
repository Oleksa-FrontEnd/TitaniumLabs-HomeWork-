/*maximum number in the array*/
var numbersArray = [1,NaN,8,5,-3];
var maxNumber = numbersArray[0];

for (i = 0; i < numbersArray.length; i++) {
    while (maxNumber < numbersArray[i]) {
        maxNumber = numbersArray[i]
    }
}
console.log(maxNumber)

/*minimum number in the array*/
let numbers = [5,7,2,13];
let minNumber = numbers[0];

for (i = 0; i < numbers.length; i++) {
    while (minNumber > numbers[i]){
        minNumber = numbers[i]
    }
}
console.log(minNumber)

/*sum of an array of numbers*/
let arrayNumber = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
let sumArray = 0;

for (i = 0; i < arrayNumber.length; i++) {
    sumArray += arrayNumber[i]
}
console.log(sumArray);
