class User {
    constructor(name) {
        this.name = name;
    }
    seyHello() {
        console.log(this.name + ' Hello');
        return this.name;
    }
}

const alex = new User('Alex');
console.log(alex);

class Person extends User {
    constructor(name, email) {
        super(name);
        this.email = email;
    }
    seyHello2() {
        return super.seyHello();
    }
}
const li = new Person('Li', 'li@email.ua');
console.log(li);
console.log(li.seyHello2());