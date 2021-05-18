// 사칙연산   - 브론즈5

let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
    
let numA = input[0].split(' ');
let numB = input[1].split(' ');

console.log(parseInt(numA) + parseInt(numB));
console.log(parseInt(numA) - parseInt(numB));
console.log(parseInt(numA) * parseInt(numB));
console.log(Math.floor(parseInt(numA) / parseInt(numB)));
console.log(parseInt(numA) % parseInt(numB));

/*
nodejs로 입출력을 구현하기 위해서 작성해야하는 템플릿을 README.md 에 적어놓았으니 참고
 / 연산시 소수점을 제외한 정수만 출력해야하기 때문에 Math.floor를 사용한다.
*/