// A + B (7) - 브론즈3

let input = `5
1 1
2 3
3 4
9 8
5 2`.split("\n"); 

let testC = Number(input[0])

for(let i = 1; i <= testC; i++){
    let num = input[i].split(' ');

    console.log("Case #" + i + ": " + (Number(num[0]) + Number(num[1])));
}
