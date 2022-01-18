let personAccount = {
    firstName: 'steve',
    lastName: 'lastName',
    incomes: [100, 100, 100, 100],
    expenses: 50,
    totalIncome: function () {
    },
    totalExpense: function () {
    },
    accountInfo: function () {
    },
    addIncome: function () {
    },
    addExpense: function () {
    },
    accountBalance: function () {
    }
}


const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

function signUp(email, username, password) {
    for (const key in users) {
        if (users[key]['email'] === email) {
            console.log('already has an account');
            return
        }
    }
    let obj = {}
    obj['_id'] = Math.random()
    obj.username = username
    obj.email = email
    obj.password = password
    let today = new Date()
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    obj['createdAt'] = date + ' ' + time
    obj.isLoggedIn = false
    users.push(obj)
    console.log(users);
}
signUp('hdv@alex.com', 'hdv', '123')

function signIn(email, password) {
    for (const key in users) {
        if (users[key]['email'] === email && users[key]['password'] === password) {
            console.log('Welcome');
        }
    }
}

