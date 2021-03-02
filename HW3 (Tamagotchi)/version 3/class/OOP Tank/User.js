class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }
    getName() {
        return this._name;
    }
    getSurName() {
        return this._surname;
    }
    getFullName() {
        return this._name + ' ' + this._surname;
    }
}

let user = new User('Вася', 'Петров');
console.log(user.getName());
console.log(user.getSurName());
console.log(user.getFullName());