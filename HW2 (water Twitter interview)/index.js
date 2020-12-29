let arr = [2,1,5,0,3,4,7,2,3,1,0];

function maxWater(arr){
    var heightLoc = {};
    var waterSum = 0;
    for (var x = 0; x < arr.length; x++) {
        for (var y = 0; y < arr[x]; y++) {
            var height = y + '';
            waterSum += height in heightLoc ? (x - heightLoc[height]) - 1 : 0;
            heightLoc[height] = x; // record last time we saw a wall of this height
        }
    }
 return waterSum;
}
document.write(maxWater(arr) + '</br>');

arr2 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
arr3 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
arr4 = [7, 0, 1, 3, 4, 1, 2, 1] // 9
arr5 = [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
arr6 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
arr7 = [2, 2, 2, 2, 2] // 0
arr8 = [3,5]//0
arr9 =  [2,7,2,7,4,7,1,7,3,7]//18
document.write(maxWater(arr2) + '</br>');
document.write(maxWater(arr3) + '</br>');
document.write(maxWater(arr4) + '</br>');
document.write(maxWater(arr5) + '</br>');
document.write(maxWater(arr6) + '</br>');
document.write(maxWater(arr7) + '</br>');
document.write(maxWater(arr8) + '</br>');
document.write(maxWater(arr9) + '</br>');
