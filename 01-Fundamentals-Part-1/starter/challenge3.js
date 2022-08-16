const d1 = 96;
const d2 = 108;
const d3 = 89;

const k1 = 88;
const k2 = 91;
const k3 = 110;

const dolphinsAverage = (d1+d2+d3)/3;
const koalasAverage = (k1+k2+k3)/3;

if (d1 >= 100 || d2 >= 100 || d3 >= 100){
    console.log(`Dolphins average score: ${dolphinsAverage.toFixed(2)}`);
} 

if (k1 >= 100 || k2 >= 100 || k3 >= 100){
    console.log(`Koalas average score: ${koalasAverage.toFixed(2)}`);
}

if (dolphinsAverage > koalasAverage){
    console.log(`Dolphins win by ${(dolphinsAverage - koalasAverage).toFixed(2)} more points`)
} else{
    console.log(`Koalas win by ${(koalasAverage - dolphinsAverage).toFixed(2)} more points`)
}