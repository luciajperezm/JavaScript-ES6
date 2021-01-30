//Normal function

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el){
return 2021 - el; 
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2021 - el);
console.log(ages6);

//with 2 arguments
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2021 - el}.`);
console.log(ages6);

//with more than one line of code
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);



//This keyword

//ES5
