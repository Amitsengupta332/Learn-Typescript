// Destructuring -> Object Destructuring, Array Destructuring

const user = {
    id: 123,
    name: {
        firstName: 'Amit',
        middleName: 'sen',
        lastName: 'gupta'
    },
    contactNo: "017000000",
    address: 'Uganda'
};

const { contactNo, name: { middleName } } = user;

// Array Destructuring

const myFriends = ['Joey', 'Ross','Chandler', 'Rachel', 'monica', 'phebe']

const [ ,  , bestFriends, ...rest] = myFriends