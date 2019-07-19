// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
};

console.log(add(55, 1));

//this keyword = no longer bound

/* const user = {
    name: 'Sai',
    cities: ['Stamford', 'Clifton', 'Plano'],
    printPlacesLived() {
        this.cities.forEach((city) => { console.log(this.name + ' has lived in ' + city)});
        //return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

user.printPlacesLived(); */

const user = {
    name: 'Sai',
    cities: ['Stamford', 'Clifton', 'Plano'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());