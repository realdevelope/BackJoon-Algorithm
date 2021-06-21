function solution(board, moves){                    // board 게임판 / moves 크레인이 멈춘위치
    
    let answer = 0;                                  
    let stack = [];     
    
    moves.forEach(element => {                      //프로토타입이라서 배열에서 바로 foreach 바로 사용가능
        for(let i = 0; i< board.length; i++){       //아래로 내려감
            //console.log(board.length);            //5가 나옴 - 그래서 행만 쭉 돌 수 있음 개꿀띠
            if(board[i][element -1] !== 0){         //행위치는 고정 하고 0이 아닐때
                let doll = board[i][element -1];     //인형꺼내기
                board[i][element -1] = 0;           //꺼내고 그부분을 0으로 만듬
                
                if(doll === stack[stack.length-1]){        //꺼낸 인형이 스택의 상단에 있는 인형과 같다면
                    stack.pop();                    //스택에 있는것과 뽑은것 pop
                    answer +=2;
                }
                else stack.push(doll);              //꺼낸 인형이 스택의 상단과 다르면 push
                break;
            }
        }    
    });
    return answer;
}

let a = [[0, 0, 0, 0, 0],
         [0, 0, 1, 0, 3],
         [0, 2, 5, 0, 1],
         [4, 2, 4, 4, 2],
         [3, 5, 1, 3, 1]];
let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b)); 