// 사분면 구하기 - 브론즈 4
/* 힌트 : 1사분면 = x의 값이 양수일떄 y의 값이 양수
          4사분면 = x의 값이 양수일때 y의 값이 음수
          2사분면 = x의 값이 음수일때 y의 값이 양수
          3사분면 = x의 값이 음수일떄 y의 값이 음수 
*/

/*
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let numX = parseInt(input[0]).split(' ');
let numY = parseInt(input[1]).split(' ');

if(numX > 0 && numY > 0){
    console.log(1);
}
else if(numX > 0 && numY < 0){
    console.log(4);
}
else if(numX < 0 && numY > 0){
    console.log(2);
}
else if(numX < 0 && numY < 0){
    console.log(3);
}

        🚨삽질 엄청했는데.. 백준에 공지가 떳다.. 
           https://www.acmicpc.net/board/view/66736  -> readline을 사용하면 느린데ㅠㅠ
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  let numX = input[0];
  let numY = input[1];

  if(numX > 0 && numY > 0){
    console.log(1);
}
else if(numX > 0 && numY < 0){
    console.log(4);
}
else if(numX < 0 && numY > 0){
    console.log(2);
}
else if(numX < 0 && numY < 0){
    console.log(3);
}
    process.exit();
});