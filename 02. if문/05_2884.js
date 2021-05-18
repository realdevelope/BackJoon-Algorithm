//알람시계 - 브론즈3

let input = require('fs').readFileSync('dev/stdin').toString().split(" ");

let numH = Number(input[0]);
let numM = Number(input[1]);
let numZ = numH * 60 + numM;

numZ -= 45; 

if(numZ < 0 ){
    numZ =  1440 - (-numZ);
}

console.log(parseInt(numZ /60) + " " + parseInt(numZ % 60));