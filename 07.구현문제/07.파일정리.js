function solution(n){

let NDY = new Map();
let GDY = [];

n.forEach(e => {
    let a = e.split(".");

    if(NDY.has(a[1])){
        NDY.set(a[1], NDY.get(a[1]) + 1);
    }
    else{
        NDY.set(a[1], 1);
        GDY.push(a[1]);
    }
});

GDY.sort();

GDY.forEach(e1 =>{
    console.log(e1 + " " + NDY.get(e1));
});
}

let arr = ["sbrus.txt", "spc.spc", "acm.icpc", "korea.icpc", "sample.txt", "hellow.world", "sogang.spc", "example.txt"];
console.log(solution(arr)); 



