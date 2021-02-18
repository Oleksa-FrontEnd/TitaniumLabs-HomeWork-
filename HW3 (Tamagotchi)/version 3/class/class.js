function myAlert(a, c, d){
    let b = `<p class='${c}'>${a}</p>`;
    document.querySelector(d).innerHTML = b
}
myAlert('Hi!', 'blue', '.test');
myAlert('Hello!', 'orange', '.test2');


let m = new Alert('My message', 'blue', '.test');
console.log(m)
m.showAlert();
let m2 = new AlertIcon('My message', 'blue', '.test', 'account_balance');
m2.showIconAlert();
m2.myAlert(this.message);