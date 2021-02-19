class User {
    constructor() {
       // this._name = name;
    }
    set name(name){
        this._name = name.trim().toLowerCase();
    }
    get name(){
        return this._name;
    }
}
const student = new User();
student.name = '     IvAn     ';
//student.set('    Ivan');
console.log(student);
console.log(student.name);