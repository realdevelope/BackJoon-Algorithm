// 나머지  - 브론즈5

let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
    
let numA = parseInt(input[0])//.split(' ');
let numB = parseInt(input[1])//.split(' ');
let numC = parseInt(input[2])//.split(' ');
 
console.log( (numA + numB) % numC );
console.log( ((numA % numC) + (numB % numC)) % numC );
console.log( (numA * numB) % numC );
console.log( ((numA % numC) * (numB % numC)) % numC );

//nodejs로 입출력을 구현하기 위해서 작성해야하는 템플릿을 README.md 에 적어놓았으니 참고
//소괄호 주의, 문제 제대로 읽기!

//🚨 .split(' ');  여기선 쓰이지 않는다... 