// N 찍기 - 브론즈 3

let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

let jjikKi = 0;

for(let i = 1; i <= input; i++){  
     jjikKi += i + "\n";
    }

console.log(jjikKi);