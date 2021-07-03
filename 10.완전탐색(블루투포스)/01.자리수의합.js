function solution(n, a){
    let answer, max = Number.MIN_SAFE_INTEGER;  //안전한 가장 작은숫자로 초기화
    
    for(let x of a){
        let sum = 0;
        let tmp = x;                         //임시변수 - ex) x = 128

        while(tmp){
            sum += (tmp % 10);              //ex) (tmp) 128 % 10 = 8  을 sum에 누적
            tmp = Number(tmp / 10);         //ex) (tmp) 128 / 10 = 12 
        }                                   //ex) (tmp) 128 % 2 = 2     ....이런식으로 반복
        //console.log(sum);

        if(sum > max){                      //sum > max 면 sum으로 바꾸고 x(원래의값 temp에 넣어둔)을 answer로 리턴 
            max = sum;                      
            answer = x;
        }
        //console.log(answer);

        else if(sum === max){               //같을때는 비교해서 크면 기존의값 리턴
            if(x > answer){
                answer = x;
            } 
        }
    }

    return answer;
}

let a = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, a));