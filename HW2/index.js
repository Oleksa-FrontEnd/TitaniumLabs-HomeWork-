let arr = [2,1,5,0,3,4,7,2,3,1,0];

function maxWater(arr) {
    var leftMax = 0,
        rightMax = 0,
        left = 0,
        right = arr.length - 1,
        volume = 0;

    while(left < right) {

        if(arr[left] > leftMax) {
            leftMax = arr[left]
        }

        if(arr[right] > rightMax) {
            rightMax = arr[right]
        }

        if (leftMax >= rightMax) {
            volume += rightMax - arr[right]
            right--
        } else {
            volume += leftMax - arr[left]
            left++
        }
    }

    return volume
}
document.write(maxWater(arr) + '</br>');

arr2 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
arr3 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
arr4 = [7, 0, 1, 3, 4, 1, 2, 1] // 9
arr5 = [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
arr6 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
arr7 = [2, 2, 2, 2, 2] // 0
arr8 = [3,5]//0
document.write(maxWater(arr2) + '</br>');
document.write(maxWater(arr3) + '</br>');
document.write(maxWater(arr4) + '</br>');
document.write(maxWater(arr5) + '</br>');
document.write(maxWater(arr6) + '</br>');
document.write(maxWater(arr7) + '</br>');
document.write(maxWater(arr8) + '</br>');
