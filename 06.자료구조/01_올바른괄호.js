function solution(s){
    
    let answer = "YES";         //우선 YES로 설정
    stack = [];     

    for(let x of s){            //for ...of 는 s라는 객체의 모든 프로퍼티를 순회함!! 
        if(x === '('){
            stack.push(x);      //x 가 여는괄호라면 push
        } 
        else{
            if(stack.length === 0){
                return "NO";     //스택이 비어있다면 NO를 리턴 // 포문도는중간에 하는거라 잘못된 결과가 나올 수 있음!
            }
            else{
                stack.pop();    //스택에 x가(여는괄호) 있다면 pop
            } 
        }
    }
    if(stack.length != 0){       //스택에 괄호가 남아있을경우 NO 출력처리 (여는괄호가 남게됨)
        return "NO";        
    }
    return answer;
}

let a = "(())()";
console.log(solution(a));

// 다시보기