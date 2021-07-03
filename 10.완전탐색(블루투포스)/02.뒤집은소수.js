function isPrime(num){
    if(num === 1){
        return false;
    }

    for(let i = 2; i <= Number(Math.sqrt(num)); i++){
        if(num % i === 0){
            return false;
        } 
    }

    return true;
}

function solution(a){
    let answer = [];
    
    for(let x of a){
        let res = 0;
        
        while(x){
            let t = x % 10;
            res = res * 10 + t;
            x = Number(x / 10);
        }

        if(isPrime(res)){
            answer.push(res);
        } 
    }

    return answer;
}

let a = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(a));

//이게맞나....ㅠㅠ