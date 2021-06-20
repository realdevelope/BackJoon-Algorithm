const case1 = [1,2,3,3,3,3,4,4];
const case2 = [3,2,4,4,2,5,2,5,5];
const case3 = [3,5,7,9,1];

let solution = (testCase) => {
    let array = new Array();
    let pass = new Array(100);

    for(let i = 0; i < testCase.length; i++) {
        let target = testCase[i];
        let cnt = 1;

        for(let j = i + 1; j < testCase.length; j++) {
            if(pass[testCase[j]] != 1 && target == testCase[j]) {
                ++cnt;
            }
        }

        pass[target] = 1;
        if(cnt > 1) {
            array.push(cnt);
        }
    }

    return array;
}
console.log(solution(case1));
console.log(solution(case2));
console.log(solution(case3));