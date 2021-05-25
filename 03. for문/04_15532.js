// 빠른 A + B - 브론즈 2

let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

let testC = input[0].split(' ');

for(let i = 1; i <= testC; i++){
    let num = input[i].split(" ");

    console.log(Number(num[0]) + Number(num[1]));
}


//node.js 로 풀 수 없다는 이슈..
www.acmicpc.net/board/view/32852
