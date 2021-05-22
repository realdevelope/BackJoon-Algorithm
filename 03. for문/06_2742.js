//기찍 N - 브론즈 3

let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

let numN = parseInt(input);

for(let i = numN; i >= 0; i--){
    console.log(i);
}


// 시간초과... 후