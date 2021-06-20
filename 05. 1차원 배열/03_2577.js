// 숫자의개수 - 브론즈2


let input = `150
266
427`.split('\n');

let num = String(input[0] * input[1] * input[2]);

for(let i = 0; i <= 9; i++) {
    console.log(num.split(String(i)).length -1);
}





