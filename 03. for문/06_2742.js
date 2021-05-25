//기찍 N - 브론즈 3

let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

let kiJjik = '';

for(let i = input; i >= 1; i--){  
    kiJjik += i + "\n";
    }

console.log(kiJjik);

// 출력형식이 잘못됬다고??.....살려줘 