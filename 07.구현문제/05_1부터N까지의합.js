function solution(n){
    
    let answer = 0;
    
    for(let i = 1; i <= n; i++){
        answer += i;
    }
   
    return answer;
}

function rec(n, k, c) {
    if(n === c) {
        return k;
    }

   rec(n, k + c, c+1);
}

console.log(solution(10)); 

//재귀로 풀어봄 with NDY