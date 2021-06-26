function solution(arr){
    // 첫번째 완전탐색 방법

    // let answer = [1, 1, 1, 1, 1];

    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; j < arr.length; j++){
    //         if(arr[j] > arr[i]){
    //             answer[i]++;
    //         }
    //     }
    // }


    // 두번째 배열에 [인덱스, rank] 방식으로 풀기 
    let conv = []
    let answer = []
    let map = new Map();
    let rank = 1;
    for(let i = 0; i < arr.length; i++) {
        conv.push([i, arr[i]]);
    }

    conv.sort((a, b) => {
        return b[1] - a[1];
    })

    for(let i = 0; i < conv.length; i++) {
        let cur = conv[i][1];
        map.set(conv[i][0], rank);

        for(let j = i + 1; j < conv.length; j++) {
            if(cur != conv[j][1]) {
                break;
            }
            map.set(conv[j][0], rank);
        }
        console.log(map);
        rank += 1;
    }

    for(let i = 0; i < arr.length; i++) {

        answer.push(map.get(i));
    }
    return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

