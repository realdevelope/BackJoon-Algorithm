function solution(a){
    
    let answer = "";
    //console.log(a.indexOf("k",1));  

    for(let i = 0; i < a.length; i ++){
        if(a.indexOf(a[i]) === i){
            answer += a[i];
        }
    }
    return answer;
}                                  


a = "ksekkset";
console.log(solution(a));