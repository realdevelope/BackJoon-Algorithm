function solution(a){

    let answer = "";
    let cnt = 1;
    a = a + " ";    //띄워쓰기 공간 넣어주기

    for(let i =0; i < a.length-1; i++){ //띄워쓰기 공간 넣었으니까 -1
        if(a[i] === a[i+1]){
            cnt++;
        }
        else{
            answer += a[i];
            if(cnt > 1){
                answer += cnt;
                cnt = 1;    //다시 1로 초기화
            }
        }
    }
    return answer;  
}

let a = "KKHSSSSSSSE";
console.log(solution(a));