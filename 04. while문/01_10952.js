// A + B (5) - 브론즈 3


//let input = require('fs').readFileSync('/dev/stdin').toString().split("\n"); 
let input = `1 1
2 3
3 4
0 0
5 2
0 0`.toString().split("\n");
let i = 0;

while( i < input.length -1){
    let num = input[i].split(' ');
    if(num[0] === '0' && num[1] === '0'){
        break;
    }

    console.log(Number(num[0]) + Number(num[1]));
    i += 1;
} 

// 출력결과도 같는데 왜 틀리는거지... 살려줘

//다시@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@