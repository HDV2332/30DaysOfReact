let dog = {
    name: 'Doge',
    numLegs: 4,
    color: 'white',
    age: 13,
    bark: function(){
        return `woof woof`
    }
}
console.log(dog);
console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = 'lab'
dog.getDogInfo = function(){
    let statement = `${this.name} is a ${this.breed} dog. It has ${this.numLegs} legs and a ${this.color} fur.`
    return statement
}
console.log(dog.getDogInfo());

