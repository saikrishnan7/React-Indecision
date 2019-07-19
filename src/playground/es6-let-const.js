var nameVar = 'Sai';
var nameVar = 'Mike'; //Valid Javascript!! No error for duplicate nameVar.
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'; //Babel crashed trying to redefine!! So not valid ES6.
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//Babel crashed trying to reassign to const!! So not valid ES6, deleting
console.log('nameConst', nameConst);

//let and const are block level scoped. var is function level scoped. 