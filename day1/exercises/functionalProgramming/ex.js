const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
let total = 0;
products.forEach((price, i) => {
    let stt
    if (products[i]['price'] == 0) {
        stt = `The price of ${products[i]['product']} is unknown.`
    } else {
        stt = `The price of ${products[i]['product']} is ${products[i]['price']} euros.`
    }
    total += products[i]['price']
    console.log(stt);
    return `Sum price of all products is ${total}`
});
let priceArr = []
products.forEach((price, i) => {
    if (products[i]['price'] !== '') {
        priceArr.push(products[i]['product'])
    }
})
console.log(priceArr + ' have prices');

for (let i = 0; i < products.length; i++) {
    if (products[i]['price'] == '' || products[i]['price'] == ' ') {
        console.log(`The first product which doesn't have a price value is ${products[i]['product']} at index ${i}`)
        break
    }
}
// let firstWithoutoutPrice = products.findIndex((n)=>products[n]['price'] =='')
// console.log(firstWithoutPrice);


// forEach is used to execute the same code on every element in an array but does not change the array and it returns undefined.
// map executes the same code on every element in an array and returns a new array with the updated elements.
// filter checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

//filter is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method. Doesnt change the original array.Doesnt
//Find is used to get the value of the first element in the array that satisfies the provided condition.
//Findindex returns index of first element of the given array that satisfies the provided function condition.

//some() is used to check whether at least one of the elements of the array satisfies the given condition or not.
//every() is used to checks whether all the elements of the array satisfy the given condition or not.