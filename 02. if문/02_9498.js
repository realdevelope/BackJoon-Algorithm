// 시험 성적 - 브론즈4

let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

let score = parseInt(input);

if(score >= 90 && score < 101 ){
    console.log("A");
}
else if(score >= 80 && score < 90 ){
    console.log("B");
}
else if(score >= 70 && score < 80 ){
    console.log("C");
}
else if(score >= 60 && score < 70 ){
    console.log("D");
}
else{
    console.log("F");
}

//한줄 입력
//🚨 .split(' ');  이젠 안쓰는걸로 ㅋ