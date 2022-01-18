const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(Math.max.apply(Math, ages));
console.log(Math.min.apply(Math, ages));
let len = ages.length
let mid = Math.floor(len/2)
if (len % 2 == 0) {
    console.log((ages[mid]+ages[mid+1])/2);
 } else{
     console.log(ages[mid]);
 }

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
console.log(countries.slice(0,10));
let len = countries.length
let mid = Math.floor(len/2)
if (len % 2 == 0) {
    console.log(' The middle countries are '+countries[mid]+' '+countries[mid+1]+'.');
 } else{
     console.log('The middle country is '+countries[mid] +'.');
 }



