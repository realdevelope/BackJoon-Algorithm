function solution(n){
    
    let answer = 0;
    let cnt = 0;
    

    for(let x of n){
        if(x === 1){
            cnt += 1;
            answer += cnt;
        }
        else{
            cnt = 0;
        }
       
    }
    
    
    // for(i = 0; i < n.length; i++){
    //     if(n[i] === 1 && n[i-1] === 0){
    //         answer += 1;
    //     }
    //     else if(n[i] === 1 && n[i-1] === 1 && n[i-2] === 0){
    //         answer += 2;
    //     }
    //     else if(n[i] === 1 && n[i-1] === 1 && n[i-2] === 1){
    //         answer += 3;
    //     }
    //     else if(n[i] === 1){
    //         answer +=1;
    //     }

    return answer;
}


let n = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(n));