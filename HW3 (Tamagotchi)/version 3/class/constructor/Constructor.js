// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     seyHello() {
//         console.log(this.name + ' Hello');
//         return this.name;
//     }
// }
//
// const alex = new User('Alex');
// console.log(alex);
//
// class Person extends User {
//     constructor(name, email) {
//         super(name);
//         this.email = email;
//     }
//     seyHello2() {
//         return super.seyHello();
//     }
// }
// const li = new Person('Li', 'li@email.ua');
// console.log(li);
// console.log(li.seyHello2());

class User {
    seyHello() {
         console.log(this.name + ' Hello');
         return this.name;
    }
}
const alex = new User();
console.log(alex);
console.log(alex.seyHello());
class Person extends User {
    constructor(name) {
    super();
    this.name = name;
    }
}
const li = new Person('lu');
console.log(li);