// A + b (4) - 브론즈 3

let input = `1 1
2 3
3 4
9 8
5 2`.split("\n"); 

let i = 0;

console.log(input);

while( i <= input.length-1) {
    let num = input[i].split(' ');
   // console.log(num[0] + " " + num[1]);

    //console.log(Number(num[0]) + Number(num[1]));
    ++i;
} 


/*
아래는 관련 이슈!

a = "1 1\n2 3\n3 3\n4 5\n6 7\n7 8"
b = "1 1\n2 3\n3 3\n4 5\n6 7\n7 8\n"

형태로 테스트 해본 결과 

a.split('\n')
(6) ["1 1", "2 3", "3 3", "4 5", "6 7", "7 8"]
b.split('\n')
(7) ["1 1", "2 3", "3 3", "4 5", "6 7", "7 8", ""]

으로 나옵니다.


아무래도 테스트 케이스 마지막부분에 \n 이 하나더 추가되어 있나보네요
이러한 문제는 b.trim().split('\n') 으로 해주시면

length-1 을 안해주셔도 됩니다.
*/