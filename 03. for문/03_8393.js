// 합 - 브론즈 5

let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

let numN = Number(input);
let sum = 0;

for(let i = 1; i <= numN; i++ ){
    sum += i;
}
console.log(Number(sum));
