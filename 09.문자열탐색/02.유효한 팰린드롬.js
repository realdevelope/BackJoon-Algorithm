function solution(a){  

    let answer = "YES";

    a = a.toLowerCase().replace(/[^a-z]/g, '');         //정규식 - 소문자가 아닌것들 다 찾아서 빈문자열로 바꿈 
    //console.log(a);                                   -> 즉 소문자만 전부 붙어서 출력됨
    if(a.split('').reverse().join('') !== a){                  //문자배열로 만들고 리버스로 거꾸로 돌려주고 조인으로 스트링화
        return "NO";
    }
    return answer;
}
 
let a = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(a));