// 나머지 - 브론즈 2

let input = `1
2
3
4
5
6
7
8
9
10`.trim().split("\n"); 

const num = [];

input.forEach(DY => {
     const remainderNum = DY % 42;
    
    if (num.indexOf(remainderNum) === -1) {
        num.push(remainderNum);
    }
});

console.log(num.length);

// 분석중
//딕셔너리로 풀어보기
// trim() 은 통과하나 replace()는 틀렸다고 뜸...ㄷㄷ;;