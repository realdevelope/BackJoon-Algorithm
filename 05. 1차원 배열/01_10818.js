// 최소, 최대 - 브론즈 3

let input = `5
20 10 35 30 7`.split('\n');

let test = Number(input[0]);
let num = input[1].split(' ').map(a => Number(a));

let maxValue = num[0]; 
let minValue = num[0];

for (let i = 1; i < test; i++) {
  if (maxValue < num[i]) {
    maxValue = num[i];
  }
  if (minValue > num[i]) {
    minValue = num[i];
  }
}

console.log(`${minValue} ${maxValue}`);