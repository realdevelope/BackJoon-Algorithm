//별찍기 - 브론즈 3


/* 이중포문 채점결과 틀리는거 실화인가.... 

let input = `5`.split("\n"); 

let testC = input[0].split(' ');

for(let i = 0; i < testC; i++){
    for(let j =0; j <= i; j++){
        console.log("*");
    }
    console.log(" ");
}

*/

let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let testC = input[0].split(' ');
let star = '';

for(let i = 1; i <= testC; i++){
    console.log(star += "*")    
}
