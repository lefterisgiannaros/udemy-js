const averageScore = (score1, score2, score3) => (score1+score2+score3)/3;

let avgDolphins = averageScore(44,23,71);
let avgKoalas = averageScore(85,54,41);

console.log(`Dolphins:${avgDolphins} Koalas:${avgKoalas}`);

const checkWinner = function (avgDolphins,avgKoalas){
    if(avgDolphins>= 2*avgKoalas){
        console.log(`Dolphins win`);
    } else if (avgDolphins <= 2*avgKoalas){
        console.log(`Koalas win`);
    } else {
    console.log('No team wins...');
}}

checkWinner(avgDolphins,avgKoalas);
