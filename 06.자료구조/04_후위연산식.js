function solution(s){
    
    let answer;
    stack = [];  
    
    for(let x of s){
        if(!isNaN(x)){                      //숫자를 만나면push -   isNaN : 숫자인지 아닌지 확인하는것(숫자가 아니면 참) Number.isNaN(x)에서 isNaN한번 써봄 ㅋ
            //consoel.log(x)
            stack.push(Number(x))           //스트링으로 변환 - 
        }
        else{
            let rightNum = stack.pop();     //연산자를 만날시 스택에서 먼저 꺼내서 우측에 갈 숫자
            let leftNum = stack.pop();      //연산자를 만날시 스택에서 나중에 꺼내서 좌측에 갈 숫자

            if(x === '+'){
                stack.push(leftNum + rightNum);     //연산후에 결과를 스텍에 넣어준다
            }
            else if(x === '-'){
                stack.push(leftNum - rightNum);     //연산후에 결과를 스택에 넣어준다.
            }
            else if(x === '*'){
                stack.push(leftNum * rightNum);     //연산후에 결과를 스택에 넣어준다.
            }
           // else if(x === '/'){
           //     stack.push(leftNum / rightNum);     
           // }
        }
    }
    answer = stack[0];      //스택에 남아있는 최종숫자를 보기위해 stack[0]을 answer에 넣어줌
    return answer;
}

let a = "352+*9-";
console.log(solution(a)); 