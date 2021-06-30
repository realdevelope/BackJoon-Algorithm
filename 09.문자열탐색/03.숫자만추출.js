function solution(a){

    let answer = "";
    
    for(let x of a){
        if(!isNaN(x)){  //숫자일때 answer에 누적
            answer += x;    
        }  
    }  
    return Number(answer);  //Number나 ParseInt 안하면 문자열로 인식해 0208로 출력됨..
}

let a = "g0en2T0s8eSoft";
console.log(solution(a));