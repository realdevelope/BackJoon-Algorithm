function solution(a){
    
    let answer;
    let mid = Math.floor(a.length / 2)  

    if(a.length % 2 ==1){
        answer = a.substr(mid, 1);
    }
    else{
        answer = a.substr(mid -1, 2);
    }

    return answer;
}                                  


a = "study";
console.log(solution(a));