function userIdGeneratedByUser() {
    let numChar = prompt("Input number of characters?")
    let numId = prompt("Input number of ids?")

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < numId; i++) {
        for (var i = 0; i < numChar; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
    }
    return result;
}

// Shuffle an array ( Fisher-Yates???)
function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr
}  

//factorialize
function factorialize(n) {
    if (n < 0) {
        return console.log("n must be greater than 0");
    } else {
        console.log(resursion(n));
    }
    function resursion(n) {
        if (n == 0) {
            return 1
        } else {
            console.log(n);
            return n * resursion(n - 1)
        }
    }
}

function isEmpty(params) {
    params === ""? console.log('is empty'): console.log('not empty');
}

