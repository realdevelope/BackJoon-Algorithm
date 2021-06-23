function solution(a){
    
    let answer = 0;

    for(let x of a){
        //console.log(x.toUpperCase(), x);
        if(x === x.toUpperCase()){                  //toUpperCase() : 대문자로 변환
            answer++;        
        }
    }

    return answer;
}                                  


a = "KoreaTimeGood";
console.log(solution(a));


// console.log(x.toUpperCase(), x) : 대문자 찾는 느낌
// console.log(x = x.toUpperCase(), x) : 소문자를 대문자로 바꿀때