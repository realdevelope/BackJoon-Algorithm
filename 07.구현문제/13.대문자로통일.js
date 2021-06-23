function solution(a){
    
    let answer = "";

    for(let x of a){
        if(x === x.toLowerCase()){
            answer += x.toUpperCase();
        }
        else{
            answer += x;
        }
    }

    return answer;
}                                  


a = "ItisTimeToStudy";
console.log(solution(a));