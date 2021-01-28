/*---------------------------------------
VARIABLE DECLARATION
-----------------------------------------*/

/* //In ES5
var name5 = 'Lucia Perez';
age5 = 23;
name5 = 'Lucia Marquez';
console.log(name5); //-> Lucia Marquez */

/* //In ES6
const name6 = 'Jane Smith';
let age6 = 25;
name6 = 'Jane Miller';
console.log(name6); //-> error */

/* 
//ES5
function dirversLicense5(passed) {
    if (passed) {
        var name1 = 'John';
        var birth = 1998;
        console.log(name1 + ' was born in ' + birth + ' and is allowed to buy a car');

    }
}

dirversLicense5(true);

//ES6
function dirversLicense6(passed) {
    if (passed) {
        let name2 = 'John';
        const birth = 1998;
        console.log(name2 + ' was born in ' + birth + ' and is allowed to buy a car');
 
    }
}

dirversLicense6(true); */

//now let's try calling the function outside of the block

//ES5
function dirversLicense5(passed) {
    if (passed) {
        var name1 = 'John';
        var birth = 1998;
    }
    console.log(name1 + ' was born in ' + birth + ' and is allowed to buy a car');
}

dirversLicense5(true);


//ES6
function dirversLicense6(passed) {
    if (passed) {
        let name2 = 'jose';
        const birth = 1993;
    }
    console.log(name2 + ' was born in ' + birth + ' and is allowed to buy a car');
}
dirversLicense6(true);