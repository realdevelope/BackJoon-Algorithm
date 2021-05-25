// A + B (8) - 브론즈3

let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let testC = (input[0]).split(' ');

for(let i = 1; i <= testC; i++){
    let num = input[i].split(' ');

    console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${(Number(num[0]) + Number(num[1]))}`);
} 
   
