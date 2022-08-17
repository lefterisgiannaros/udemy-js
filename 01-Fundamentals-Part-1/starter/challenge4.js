const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Your bill is ${bill} and the tip is ${tip}
Your total is ${bill + tip}`)