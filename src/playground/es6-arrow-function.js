/* const square = function (x) {
    return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(4));

const squareArrowConcise = (x) => x * x;

console.log(squareArrowConcise(5));
 */
const getFirstName = function(name) {
    return name.split(' ')[0];
}

console.log(getFirstName('Sai Srivatsan'));

const getFirstNameArrow = (name) => {
    return name.split(' ')[0];
}

console.log(getFirstNameArrow('Sai Srivatsan'));

const getFirstNameArrowConcise = (name) => name.split(' ')[0];

console.log(getFirstNameArrowConcise('Sai Srivatsan'));