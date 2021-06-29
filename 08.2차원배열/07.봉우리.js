function solution(arr){  
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];             //12시방향, 3시방향, 6시방향, 9시방향
    let dy = [0, 1, 0, -1];             //12시방향, 3시방향, 6시방향, 9시방향

    for(let i = 0; i < n; i++){        //3중포문을 쓰게 되다니...
        for(let j = 0; j < n; j++){
            let flag = 1;

            for(let k = 0; k < 4; k++){
                let nx = i + dx[k];     //가려고하는 행방향의 좌표
                let ny = j + dy[k];     //가려고하는 열방향의 좌표

                if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]){     //봉우리인지 아닌지 확인 - 조건에 맞는게 있을시 봉우리가 아님
                    flag = 0;
                    break;
                }
            }
            if(flag) answer++;
        }
    }  
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));

//내일 다시 풀어보기... 너무 어렵다...