function solution(arr){  
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length                          //5
    let sum1 = sum2 = 0;                        //sum1 - 행의합, sum2 - 열의합

    for(let i = 0; i < n; i++){
        sum1 = sum2 = 0;                        //누적하려면 처음에 초기화해줘야함
        for(let j = 0; j < n; j++){
            sum1 += arr[i][j];                  //행의합
            sum2 += arr[j][i];                  //열의합
        }
        answer = Math.max(answer, sum1, sum2);  //NDY 말대로 내장함수사용ㅋ
    }

    sum1 = sum2 = 0;                            //마찬가지로 다시 초기화
    for(let i = 0; i < n; i++){
        sum1 += arr[i][i];                      // 첫번쨰 \대각선은 1,1 / 2,2 .....이런식이기떄문에 
        sum2 += arr[i][n-i-1];                  //이중포문없이 arr[i][i]가 되고, 
    }                                           // 두번쨰 /대각선은 4,0 / 3,1 .... 이런식이기 때문에
    answer = Math.max(answer, sum1, sum2);      // 이중포문없이 arr[i][n - i - 1]이 된다.
    
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));