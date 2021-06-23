function solution(a, b){
    
    let answer = 0;

    for(let x of a){
        if(x === b){
            answer++;
        }
    }

    return answer;
}                                  


a = "COMPUTERPROGRAMMING";
b = "R";
console.log(solution(a, b));
