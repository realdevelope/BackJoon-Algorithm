function solution(n){
    
    let answer = 0;

    for(i = 1; i < n.length; i++){
        if(n[i] < n[i+1] ){
            answer++;
        }
    }
    answer +=1;     //맨 앞의 사람은 키의 유무랑 상관없이 보이기때문에 1을 더한다.

    return answer;
}


n = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(n));