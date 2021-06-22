function solution(arr){
    
    let answer = [];
    let sum = 0;                //홀수의 합 
    let min = Number.MAX_SAFE_INTEGER;  //min 구할시 min에 큰값(MAX_SAFE_INTEGER)을 초기화 해놓으면 비교시 수월하게 최소값이 min에 들어감 

    for(let x of arr){
        if(x % 2 === 1){        //홀수 조건
            sum += x;           //홀수일시 sum에 누적
            if(x < min){        
                min = x;        //홀수중에 최솟값을 min에 대입
            }
        }
    }
    answer.push(sum);           //홀수들의 합
    answer.push(min);           //홀수중의 최솟값 
    
    return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)); 