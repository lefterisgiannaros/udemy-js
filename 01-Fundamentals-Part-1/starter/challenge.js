kg = 100
height = 1.69
BMI = kg / (height * height )
console.log(BMI);


// ---TEST DATA 1---
//Mark - 78kg 1.69m
//John - 92kg 1.95m

// ---TEST DATA 2---
//Mark - 95kg 1.88m
//John - 85kg 1.76m

//IMPORTANT: the right and tidy way to do this is by creating 2 objects but we're not that far into the course, 
//it's a bit sad but i'll write it like this

BMI = kg / (height * height );

const markKG = 78;
const markHEIGHT= 1.69;

const johnKG = 92;
const johnHEIGHT = 1.95;

const markBMI = markKG / (markHEIGHT ** 2);
const johnBMI = johnKG /(johnHEIGHT ** 2);

console.log("Mark's bmi is:", markBMI);
console.log("John's BMI is:", johnBMI);

markHigherBMI = markBMI < johnBMI;
console.log(markHigherBMI)