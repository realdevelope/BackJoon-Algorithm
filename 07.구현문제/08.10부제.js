function solution(day, arr){
    
    let answer = 0;

    for(let x of arr){
        if(x % 10 === day){         //x(자동차번호)를 10으로 나눴을때 day랑같을때 
            answer++;               //위반차량이므로 answer 증가
        } 
    }
    return answer;
}                                  

day = 3;
arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(day, arr));

//중요한것 !!!!!!!
// 두자리수의 숫자를  10으로 나눌시
// 몫은 첫번쨰(십의)자리
// 나머지는 두번째(일의)자리 가 된다.
// ex)  25 / 10 = 2...5
