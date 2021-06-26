function solution(n){
    
    let answer =[];
    answer.push(n[0]);
  //console.log(answer);         //answer = 7

    for(let i=1; i < n.length; i++){    //첫번째수i[0]을 픽스 하고 비교해야하기에 1번지부터 돌린다
        if(n[i] > n[i-1]){
            answer.push(n[i]);
            //console.log(answer);
        }
    }
    return answer;
}


n = [7, 3, 9, 5, 6, 12];
console.log(solution(n));