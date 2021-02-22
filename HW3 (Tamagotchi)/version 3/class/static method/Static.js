//static Method
class User {
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
//console.log(person.getRole());

