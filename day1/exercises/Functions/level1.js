function fullName(firstName,lastName){
    return( firstName +  ' ' + lastName)
}

function addNumbers(a,b){
    return a+b
}

function _areaOfCircle(r){
    let area = Math.PI*(r**2)
    return area
}

function convertCelciusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32
    return oF
}

function checkBMI(w,h){
    let bmi = w/(h**2)
    if (bmi<18.5){
        console.log('underweight');
    }else if(bmi>=18.5 && bmi<25){
        console.log('normal weight');
    }else if(bmi >= 25 && bmi <30){
        console.log('overweight');
    }
    console.log('obese');
}

function checkSeason(input) {
    if (input == 'September' || input == 'October' || input == 'November') {
        console.log('the season is Autumn.');
    } else if (input == 'December' || input == 'January' || input == 'February') {
        console.log('the season is Winter.');
    } else if (input == 'March' || input == 'April' || input == 'May') {
        console.log('the season is Spring.');
    } else {
        console.log('the season is Summer');
    }
}