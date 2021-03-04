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
    setAge(age) {
        if (this._chekAge(age)){
            this._age = age;
        }
    }
    getAge() {
        return this._age;
    }
    _chekAge(age){
        if (age >0 && age < 100){
            return true;
        } else {
            return  false;
        }
    }
}

let user = new User('Вася', 'Петров');
user.setAge(99);
console.log(user.getAge());
console.log(user.getFullName());