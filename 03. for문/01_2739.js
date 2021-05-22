//구구단 - 브론즈 3

let input = require('fs').readFileSync('dev/stdin').toString().split(" ");

let numN = parseInt(input);

for(let i =1; i < 10; i++){
    console.log(numN +" * " + i + " = " + numN*i);
}