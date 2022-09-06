'use strict';


// 33. FUNCTIONS
// function fruitProcessor(apples, oranges){
//     console.log(`Apples: ${apples} Oranges: ${oranges}`)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// 34. FUNCTION DECLARATIONS VS EXPRESSIONS

// Function declaration
// function calcAge1(currentYear, birthYear){
//     return currentYear - birthYear;
// }
// const age1 = calcAge1(2022,1993);
// console.log(age1);


// // Function expression
// const age2 = function (currentYear, birthYear){
//     return currentYear - birthYear;
// }

// console.log(age2(2022,1993));


// // Arrow expression
// const calcAge3 = birthYear => currentYear - birthYear;



// 39. ARRAYS
// const firstName = 'Jonas';
// const jonas = [firstName, 'test']

// 44. Object Methods
//"Jonas is a 46-year old teacher and he has a driver's license"

const person = {
    firstName: 'jonas',
    lastName: 'lastjonas',
    birthYear: '1976',
    hasLicense: true,

    calcAge: function(){
        return this.age = 2022 - this.birthYear;
    },

    calcDriver: function(){
        if(this.hasLicense == true){
            return "has a driver's license"
        }   else return "can't drive"
    }   
};

console.log(`${person.firstName} is a ${person.calcAge()} year old person and ${person.calcDriver()}`)