function solution(a, b, c){
    
    let answer = "YES";      //default 값으로 YES
    let max;                //가장 긴 막대
    let sum = a + b + c;    // 세 수의 합

    if(a > b){
        max = a;
    }
    else{
        max = b;
    }
    if(c > max){
        max = c
    }
    if(sum-max <= max){
         answer = "NO";
    }

    return answer;
}

console.log(solution(13, 33, 17)); 

