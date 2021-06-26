function solution(arr){
    
    let answer = arr;                                  //얕은복사
    let sum = arr.reduce((a, b) => a + b);
    //console.log(arr);
    for(let i = 0; i < 8; i++){
        for(let j = i + 1; j < 9; j++){
            //console.log(arr[i], arr[j]);
            if((sum - (arr[i]+ arr[j])) === 100){       //가짜난쟁이
                arr.splice(i, 1);                      // splice : 특정 인덱스의 값을 제거
                arr.splice(j, 1);                      // 
            }
        
        }
    }

    //console.log(sum);
    return answer;
}                                  

arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
