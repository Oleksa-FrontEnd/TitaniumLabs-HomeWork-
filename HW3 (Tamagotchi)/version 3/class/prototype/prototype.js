let user = {
    username: 'Ivan',
    email : 'exempel@ua',
    _password: '',
    set password(pass) {
        this._password = pass.trim();
    },
    get password () {
        return this._password;
    }
}
console.log(typeof user);
user.password = ' Hello ';
    console.log(user);
    console.log(user.password);
let user2 = {};
user2.__proto__ = user;
user2.username = 'Privet';

user2.password = '  123    345';
    //console.log(user2);
// user2.photo = 'ivan.jpeg';
//
 console.log(user2);
 console.log(user2.username);
 console.log(user2.password);
console.log(user2.email);