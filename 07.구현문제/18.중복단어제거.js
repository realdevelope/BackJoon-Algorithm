function solution(a){
    
    let answer;

    //console.log(a.indexOf("time"));
    answer = a.filter(function(v, i){
        return a.indexOf(v) === i;
    });


    return answer;
}                                  


a = ["good", "time", "good", "time", "student"];
console.log(solution(a));