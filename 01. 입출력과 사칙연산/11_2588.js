// 곱셈  - 브론즈4

let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
    
let numA = parseInt(input[0])//.split(' ');
let numB = input[1]//.split(' ');

console.log( numA * parseInt(numB[2]) );
console.log( numA * parseInt(numB[1]) );
console.log( numA * parseInt(numB[0]) );
console.log( numA * parseInt(numB) );

//nodejs로 입출력을 구현하기 위해서 작성해야하는 템플릿을 README.md 에 적어놓았으니 참고
//소괄호 주의, 문제 제대로 읽기!

//🚨 .split(' ');  여기선 쓰이지 않는다... 
//🚨 배열 값을 사용하려면  parseInt를 쓰지않고 받아온후 출력시 parseInt 해야함! 안해도 틀림..