function solution(a){
    let answer = 0;
    let m = test.length;
    let n = test[0].length;
    
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            //console.log(i, j);
            let cnt = 0;

            for(let k = 0; k < m; k++){
                let pi = pj = 0;        //하...

                for(let s = 0; s < n; s++){
                    if(test[k][s] === i){
                        pi = s;
                    } 
                    if(test[k][s] === j){
                        pj = s;
                    } 
                }
                if(pi < pj){
                    cnt++;
                } 
            }
            if(cnt === m){
                answer++;
            } 
        }
    }
    return answer;
}

let a = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(a));
// push사용하여 내일 다시 풀어보기