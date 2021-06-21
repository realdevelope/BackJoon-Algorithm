function solution(s){
    
    let answer;

    if( (s % 4 == 0) && (s % 100 !=0) || (s % 400 ==0) ){   // 4의 배수이면서 100의 배수가 아닐때 혹은 400의 배수일때
        console.log("1");                                   // 윤년입니다.
    }
    else{
        console.log("0")                                    // 윤년이 아닙니다.
    }
    return answer;
}
let a = "1999";
console.log(solution(a)); 