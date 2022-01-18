class Animal{
    constructor(name, age, color, numLeg){
        this.name = name
        this.age = age
        this.color = color
        this.numLeg = numLeg
    }
    getInfo(){
        let stt = `This is ${this.name}. It is ${this.age} years old. It has a ${this.color} fur and ${this.numLeg} legs.`
        return stt
    }
}
class Dog extends Animal{
    constructor( name, age, color, numLeg, loyalty){
        super(name, age, color, numLeg)
        this.loyalty = loyalty
    }
    bark(){
        console.log('Woof Woof');
    }
    getInfo(){
        let stt = `This is ${this.name}. It is ${this.age} years old. It has a ${this.color} fur and ${this.numLeg} legs.`
        if (this.loyalty==true) {
            stt += `It is very trust worthy.`
           }
        return stt
    }
}
class Cat extends Animal{
    constructor( name, age, color, numLeg, loyalty){
        super(name, age, color, numLeg)
        this.loyalty = loyalty
    }
    purr(){
        console.log('Purrr');
    }

}

const sushi = new Dog('sushi', 15,'black',4, true)
console.log(sushi.getInfo());
