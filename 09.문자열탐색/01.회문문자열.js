// function solution(a){  

//     let answer = "YES";
//     a = a.toLowerCase();    //전부 소문자로 변환

//     for(let i =0; i < Math.floor(a.length/2); i++){
//         if(a[i] !== a[a.length - i - 1]){       //직접비교!!
//             return "NO";
//         }
//     }
//     return answer;
// }
 
// let a = "gooG";
// console.log(solution(a));




// 리버스 사용해서 풀어본 방법
function solution(a){  

    let answer = "YES";
    a = a.toLowerCase();    //전부 소문자로 변환

    if((a.split('').reverse().join('')) !== a){     //문자배열로 만들고 리버스로 거꾸로 돌려주고 조인으로 스트링화
        return "NO";
    }

    return answer;
}
 
let a = "gooG";
console.log(solution(a));