//static Method
class User {
    static test = true;
    constructor(name) {
        this.name = name;
    }
    static getRole(email) {
        return 'admin';
    }
    static getId(email){

    }
    static getUser(id){
        //return user
    }

}

const person = new User('Ivan');
console.log(person);

console.log(User.getRole('alex@ex'));
console.log(User.test);
//console.log(person.getRole());
class Student extends User {
    static test = false;
    constructor(name) {
        super();
    }
}
console.log(Student.getRole('test'));
console.log(Student.test);