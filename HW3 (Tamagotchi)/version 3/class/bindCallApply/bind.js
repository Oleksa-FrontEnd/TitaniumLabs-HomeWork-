const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');

//b1.onclick = test;

function test(color, num) {
    console.log(this);
    console.log(num);
    this.style.background = color;
}
//test();   !!!Error!!!
//call();
//function.call(context, [arg1, arg2...]}
//test.call(b1); //вызвал функцию - this = b1
// }
// b2.onclick = function () {
//     test.apply(b1, ['green', 42]);
// }

//bind
let a = test.bind(b1, 'orange', 77);
let b = test.bind(b2, 'red', 42);

b2.onclick = a;