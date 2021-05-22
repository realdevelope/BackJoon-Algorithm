//A + B - 브론즈 3

let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let testC = parseint(input[0])//.split(' ');

for(let i =1; i <= testC[0]; i++){
    let numA = parseInt(input[0])//.split(' ');
    let numB = parseInt(input[1])//.split(' ');

    console.log(numA + numB);
}

// 왜 계속 런타임에러 뜨는지 모르겠음ㅠㅠ