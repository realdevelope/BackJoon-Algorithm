function solution(a){
    
    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    for(let x of a){
       if(x.length > max){
           max = x.length;
           answer = x;
       }
        
    }
    return answer;
}                                  


a = ["teacher","time","student","beautiful","good"];
console.log(solution(a));