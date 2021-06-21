function solution(s){
    
    let answer = 0;
    let stack = [];  
    
    for(let i =0; i< s.length; i++){        //for of를 안쓴 이유는 인덱스로 접근해야 바로앞의 괄호를 확인 하기 쉬움 
        if(s[i] === '('){
            stack.push(s[i]);               //s[i]가 여는괄호일떄 스택에 push
        }
        else{
           if(s[i-1] === '('){              //s[i]가 닫는괄호일떄 s[i-1]이 여는괄호라면 레이저 괄호 라는뜻
                stack.pop();                // 여기에 stack.pop()을 해줘야 레이저의 괄호를 포함하지 않음
                answer += stack.length      // 스택에 남아있는개수 answer에 누적
            }
            else{                           //막대기의 끝일때는 answer에 1 누적
                answer += 1;
                stack.pop();                
            }
        }     
    }
    return answer;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a)); 


//다시풀어보기
