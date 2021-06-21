function solution(n, k){
    
    let answer;
    let queue = Array.from({length: n}, (v, i) => i + 1);      //길이가 n인 유사배열객체 -> 큐라는 자료구조 생성되긴하는데 길이만 n인 객체가 생성된다고함
    
    while(queue.length){                                    // 큐에 1나있을떄 까지 반복 0이면 멈춤
        for(let i = 1; i < k; i++){
            queue.push(queue.shift());                      //큐에서 3을 외치지 않은(제외되지않은) 왕자들을 shift(제외)하고 그걸 뒤에다 다시 푸시!
        }
        queue.shift();                                  //3을 외친 왕자는 그냥 shift(제외)해버림
        
        if(queue.length === 1){                         //스텍에 자료가 하나 남았을떄 마지막 왕자 shift 해서 answer에 넣어줌
            answer = queue.shift();
        }
    }
    //console.log(queue);
    //console.log(answer); 
    return answer;
    
}
//let a = "8, 3";
console.log(solution(8, 3)); 


//삽질의 연속 -> for문 조건을 i=0, i <= k 로 하는바람에 3이 나왔음
//if 문을 한번 뺴고 해보기!! - GDY의견