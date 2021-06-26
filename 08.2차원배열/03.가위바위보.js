function solution(a, b){
    
    let answer = "";

    for(let i = 0; i < a.length; i++){
        if(a[i] === 1 && b[i] ===3){          //a가 이겼을 경우의 수와 a와 b가 같을때만만 조건걸어주고 그외에는 B가 이기는걸로 
            answer += "A"+"\n";
        }
        else if(a[i] === 2 && b[i] === 1){
            answer += "A" + "\n";
        }
        else if(a[i] === 3 && b[i] === 2){
            answer += "A"+ "\n";
        }
        else if(a[i] === b[i]){
            answer += "D"+ "\n";
        }
        else{
            answer += "B" + "\n";
        }
    }

    return answer;
}


let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));