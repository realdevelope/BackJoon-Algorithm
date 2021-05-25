//별찍기2 - 브론즈 3

let input = `5`.split("\n"); 

let testC = input[0].split(' ');

for(let i = 0; i < testC; i++){ 
    let result = ''; 

    for(let j = 0; j < testC; j++) {
        if(j < testC - (i +1)) {
            result += " "; 
        }
        else{
            result += "*";
        }
    }
console.log(result);
}

// 삽질의 연속... 결국 C언어 코드 비슷한거 보고 접목...