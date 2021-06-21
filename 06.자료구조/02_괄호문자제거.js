function solution(s){
    
    let answer;
    let stack = [];   
    
    for(let x of s){                    ////for ...of 는 s라는 객체의 모든 프로퍼티를 순회함!! 
        if(x === ')'){
            while(stack.pop() !== '('); //여는괄호를 만나기전까지 반복
        }
        else{
            stack.push(x);              //닫는괄호 제외한거 전부 pop
        }
    }
    //console.log(stack);               //배열로 출력되는거 확인 
    answer = stack.join("");            //string 처리와 동시에 하나의 문자로 합침!!
    return answer;
}

let a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(a)); 