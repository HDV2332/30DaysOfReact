//1. Declare an empty array;
let arr = []

//Declare an array with more than 5 number of elements
let arr = [1, 2, 3, 4, 5]

//Find the length of your array
console.log(arr.length);

//Get the first item, the middle item and the last item of the array
console.log(arr[0]);
console.log(arr[Math.floor(arr.length / 2)]);
console.log(arr[arr.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
// The array size should be greater than 5
let mixedDataTypes = [1, 'one', true, { name: 'hdv', age: 21 }, [1, 2, 3]]
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies); //7. Print the array using console.log()
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

//10.Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

//Change each company name to uppercase one by one and print them out
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i].toString().toUpperCase()
}
console.log(itCompanies);

//Print the array like as a sentence:
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let comp = itCompanies.slice(0, itCompanies.length - 1).join(', ') + ', and ' + itCompanies.slice(-1)
let result = comp + ' are big IT companies'
console.log(result);

//Check if a company is included in the array
let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]
function check(comp) {
    let indexOfComp = itCompanies.indexOf(comp) // -1, if the element not found index is -1
    if (indexOfComp != -1) {
        console.log('This company does exist in the array')
    } else {
        console.log('not found')
    }
}
check("Facebook")

//Filter out companies which have more than one 'o' without the filter method
let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]
for (let i = 0; i < itCompanies.length; i++) {
    let index = itCompanies[i].search(/o+/g)
    console.log(index);
}

//Sort the array using sort() method
console.log(itCompanies.sort());

//Reverse the array using reverse() method
console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]
console.log(itCompanies.slice(0,3));

//Slice out the last 3 companies from the array
let len =  itCompanies.length
console.log(itCompanies.slice(len-3, len));

//Slice out the middle IT company or companies from the array
let mid = Math.floor(itCompanies.length/2)
console.log(itCompanies.slice(mid,mid+1));

//Remove the first IT company from the array
console.log(itCompanies.shift());

//Remove the middle company
let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]
let mid = Math.floor(itCompanies.length/2)
let midComp = itCompanies.splice(mid,1)
console.log(itCompanies);

//Remove the last IT company from the array
console.log(itCompanies.pop());

//remove all companies
console.log(itCompanies.splice());

