// 합 - 브론즈 5

let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

let numN = parseInt(input);
let sum = 0;

for(let i = 1; i <= numN; i++ ){
    sum =+ i;
}

console.log(sum);


// 왜 계속 런타임에러 뜨는지 모르겠음ㅠㅠ