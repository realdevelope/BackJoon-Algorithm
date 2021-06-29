function solution(a){

    let answer = "";
    
    for(let x of a){
        if(!isNaN(x)){
            answer += x; 
        }  
    }  
    return Number(answer);
}

let a = "g0en2T0s8eSoft";
console.log(solution(a));