function solution(s, t){

    let answer = [];
    let p = 100; //최대 100을 넘지 않음
    
    for(let x of s){
        if(x === t){    
            p = 0;
            answer.push(p);     //t와 같으면 0
        }
        else{
            p++;
            answer.push(p);     //t가 아니면 ++해서 push
        }
    }
    //console.log(answer);

    for(let i = s.length-1; i >= 0; i--){       //인덱스번호로 해야하기때문에 -1
        if(s[i] === t){     
            p = 0;
            answer.push(p);     //t와 같으면 0
        }
        else{
            p++;
            answer[i] = Math.min(answer[i, p]);     //t가 아니면 ++하고 기존의 answer[i]와 지금 만든 p 중에서 작은값
        }
    }

    return answer;  
}

let s = "teachermode";
let t = "e";
console.log(solution(s, t));

//스읍... 뭐가문제지.... NDY 살려줘!!!!!!!