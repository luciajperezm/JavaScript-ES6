let firstName = 'Lucia';
let lastName = 'Perez';
const yearOfBirth = 1996;
function calcAge(year) {
    return 2021 - year;
}

//ES5
console.log('this is ' + firstName);

//ES6
console.log(`this is ${firstName}`);


//Some string methods

const n = `${firstName} ${lastName}`;

n.startsWith('J'); //false
n.endsWith('z'); //true
n.includes(' '); //true
firstName.repeat(3); //LuciaLuciaLucia


