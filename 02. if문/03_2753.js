//윤년 구하기 - 브론즈 4
// 힌트 : (4의배수이면서 100의 배수가 아닐때 혹은 400의 배수일때)

let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

let year = parseInt(input);

if( (year % 4 == 0) && (year % 100 !=0) || (year % 400 ==0) ){
    console.log("1");   //윤년입니다.
}
else{
    console.log("0")    //윤년이 아닙니다.
}


//한줄 입력
//🚨 .split(' ');  이젠 안쓰는걸로 ㅋ