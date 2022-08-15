const markKG = 78;
const markHEIGHT= 1.69;

const johnKG = 92;
const johnHEIGHT = 1.95;

const markBMI = markKG / (markHEIGHT ** 2);
const johnBMI = johnKG /(johnHEIGHT ** 2);

let mBMI = markBMI.toFixed(2);
let jBMI = johnBMI.toFixed(2);

console.log("Mark's BMI is:", markBMI);
console.log("John's BMI is:", johnBMI);

if (markBMI > johnBMI){
    console.log(`Mark's BMI (${mBMI}) is higher than John's (${jBMI})`)
} else {
    console.log (`John's BMI (${jBMI}) is higher than Mark's (${mBMI})`)
}