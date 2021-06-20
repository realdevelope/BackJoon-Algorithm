// 최댓값 - 브론즈 2


let input = `3
85
38
12
57
74
40
2
61`.split("\n"); 

let numbers = input.map(a => Number(a));

let maxValue = numbers[0];
let order = 0;

for (let i = 1; i < 9; i++) {
  if (maxValue < numbers[i]) {
    maxValue = numbers[i];
    order = i;
  }
}
console.log(maxValue);
console.log(order + 1);