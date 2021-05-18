// 두수 비교하기 - 브론즈 4

let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
    
let numA = parseInt(input[0]);//.split(' ');
let numB = parseInt(input[1]);//.split(' ');

if(numA > numB){
    console.log(">");
}
else if(numA < numB){
    console.log("<");
}
else if(numA == numB){
    console.log("==");
}

//🚨 .split(' ');  10430, 2588 문제에서만 안쓰이는줄 알았는데 여기서도 쓰이지 않는다...
// 문자열을 안나눠도 될때는 쓰면 안되는군...
