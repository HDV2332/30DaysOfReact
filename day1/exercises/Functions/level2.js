function solveQuadEquation(a, b, c) {
    if (a == 0) {
        return -c / b
    }
    let result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result1 + " and " + result2;
}

function printArray(arr) {
    for (const char of arr) {
        console.log(char);
    }
}

function showDateTime() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    return date + ' ' + time;
}

function swapValue(x, y) {
    return [x, y] = [y, x]
}

function reverseArray(arr) {
    let revArr = []
    for (let i = 0; i < arr.length; i++) {
        revArr.push(arr.pop())
    }
    return revArr
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(['d', 'c', 'b']));

function capitalizeArray(arr) {
    const uppercased = arr.map(char => char.toUpperCase());
    console.log(uppercased);
}

function removeItem(index, arr) {
    return arr.splice(index, 1)
}

function evensAndOdds(n) {
    n % 2 == 0 ?
        console.log(`Num of odds are ${n / 2}, num of evens are ${n / 2 + 1}`)
        : console.log(`Num of odds are ${(n + 1) / 2}, num of evens are ${(n + 1) / 2}`);
}

function sum(...rest) {
    return [...rest].reduce((a, b) => a + b, 0)
}

function userIdGenerator() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



