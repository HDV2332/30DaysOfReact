//grading
function checkGrades(num) {
    if (num > 80 && num < 101) {
        console.log('A');
    } else if (num >= 70 && num < 90) {
        console.log('B');
    } else if (num >= 60 && num < 70) {
        console.log('C');
    } else if (num >= 50 && num < 60) {
        console.log('D');
    } else {
        console.log('F');
    }
}
checkGrades(41)
checkGrades(100)

//check season
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

//check day
function checkDay(day) {
    let lower = day.toLowerCase()
    switch (lower) {
        case 'monday':
            console.log(lower + ' is a working day.')
            break
        case 'tuesday':
            console.log(lower + ' is a working day.')
            break
        case 'wednesday':
            console.log(lower + ' is a working day.')
            break
        case 'thursday':
            console.log(lower + ' is a working day.')
            break
        case 'friday':
            console.log(lower + ' is a working day.')
            break
        case 'saturday':
            console.log(lower + ' s a weekend day.')
            break
        case 'sunday':
            console.log(lower + ' is a weekend day.')
            break
        default:
            console.log('It is not a week day.')
    }
}