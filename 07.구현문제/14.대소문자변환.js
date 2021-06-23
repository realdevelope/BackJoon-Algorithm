function solution(a){
    
    let answer = "";

    for(let x of a){
        if(x === x.toLowerCase()){
            answer += x.toUpperCase();
        }
        else{
            answer += x.toLowerCase();
        }
    }

    return answer;
}                                  


a = "StuDY";
console.log(solution(a));