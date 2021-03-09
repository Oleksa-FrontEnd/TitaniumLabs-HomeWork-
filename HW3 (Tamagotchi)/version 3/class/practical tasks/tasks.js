let worker = new Worker('   Иван     ', 'Иванов', 10, 31);
let worker2 = new Worker('   Nik     ', 'Иванов', 12, 31);

worker.name = '           Max    ';

console.log(worker.name); //выведет 'Иван'
console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
console.log(worker2.getSalary()); //выведет 372 - то есть 12*31
console.log(worker.getSalary()+worker2.getSalary()); //выведет 682