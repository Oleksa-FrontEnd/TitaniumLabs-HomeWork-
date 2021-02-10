let a = 'Shrek2';
let b = 'dog5';
let c = 423;
const shrek = new Animal(a, b, c);

console.log(shrek);
console.log(shrek.animalName);
console.log(shrek.validateKind());

let firstAnimal = new Barboss(a, b, c);
console.log(firstAnimal.kind);
