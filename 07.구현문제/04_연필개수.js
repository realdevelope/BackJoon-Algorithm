function solution(n){
    
    let answer;
    
    answer = Math.ceil(n/12);     //Math.ceil - 소수점 있을시 올림  / Math.floor - 소수점 있을시 내림 / Math.round - 소수점 있을시 반올림  
    //console.log(n);

    return answer;
}

console.log(solution(178)); 

