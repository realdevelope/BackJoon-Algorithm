function solution(a, b, c){
    
    let answer;

    if(a < b){
        answer = a;
    }
    else{
        answer = b;
    }
    //answer에는 작은값이 들어가있게됨
    if(c < answer){
        answer = c;
    }

    return answer;
}

console.log(solution(6, 5, 11)); 

