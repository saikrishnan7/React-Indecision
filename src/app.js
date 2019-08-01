import subtract, { square, add } from './utils.js';
import isSenior, { canDrink, isAdult } from './person.js';

console.log('app.js!!');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 23));
console.log(canDrink(18));
console.log(isAdult(18));
console.log(canDrink(21));
console.log(isAdult(17));
console.log(isSenior(64));
console.log(isSenior(67));