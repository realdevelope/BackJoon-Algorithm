function solution(arr){
    
    let answer;
    let min = arr[0];

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
