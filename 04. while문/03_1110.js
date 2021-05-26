// 더하기 사이클 - 브론즈 1

/*
1의 자리에 있는 수 구하기: num % 10
10의 자리에 있는 수 구하기: Math.floor(num / 10)
1의 자리에 있는 수 10의 자리 수로 만들기 : (num % 10) * 10
*/

let input = `26
55
1
0`.split(" ");

let num = input//.split(" ");
let sum;
let i = 0;

while (true) {
    i++;
    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    if(input === num){
        break;
    }  
}

console.log(i);


//흠.. 내일다시..
