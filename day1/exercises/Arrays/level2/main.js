// import {countries} from './countries.js'
// import {webTechs} from './web_techs.js'

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
let ind = shoppingCart.indexOf('Tea')
shoppingCart.splice(ind, 1, 'Green Tea')
console.log(shoppingCart);

//4
if (countries.indexOf('Ethiopia')) {
    countries.push('Ethiopia')
}else{
    console.log('ETHIOPIA');
}
console.log(countries);

//5
if (!countries.indexOf('Sass')) {
    countries.push('Sass')
    console.log(webTechs);
}else{
    console.log('Sass is a CSS preprocess');
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

