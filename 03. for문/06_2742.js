//기찍 N - 브론즈 3

let input = require('fs').readFileSync('/dev/stdin').toString(); 
let t = parseInt(input);
let r = '';

for(let i = t; i >= 1; i--){  
    r += (i + "\n");
}

console.log(r);

// 출력형식이 잘못됬다고??.....살려줘 
// 입력이 하나들어올떈 split x!!!!!