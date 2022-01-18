const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

for (const key in users) {
    if (users[key]['skills'].length >= 5) {
        console.log(key + ' has many skills');
    }
    if ( users[key]['isLoggedIn']){
        console.log(key + ' is logged in');
    }
    if ( users[key]['points'] >=50){
        console.log(key + ' has more than 50 points on their projects');
    }
    if (users[key]['skills'].includes('MongoDB') &&users[key]['skills'].includes('Express')&users[key]['skills'].includes('React')&&users[key]['skills'].includes('Node') ){
        console.log(key + ' is a MERN stack dev.');
    }
}

for ( const key in users){
    console.log(key,users[key]);
}

let country = {
    countryName: 'VN',
    capital: 'HN',
    populations: 90000000,
    languages: 'VNese'
}
console.log(country);
