function solution(arr){
    
    let answer;
    let min = arr[0];   //0번째 인덱스를 픽스박고 포문으로 하나씩 비교하면서 min값 추출

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }   
    answer = min;
    return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr)); 
