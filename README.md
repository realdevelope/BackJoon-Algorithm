# 백준 알고리즘
## 🎯학습목표
1. [단계별로 풀어보기] 1 ~ 12 --> <b>89문제</b>
2. ~~[강의] -> [온라인강의] -> 알고리즘 기초 1/2, 알고리즘 기초 2/2의 문제만! (강의는x) --> <b>69문제, 61문제</b>~~
3. 자료구조 -> 스택, 큐, 데크, 기초구현문제들  <br>


## 🤔JS 를 선택한 이유
1. 백준에서는 굉장히 번거로울 수 있지만 많은 문제를 다양하게 풀어볼 수 있어서
2. JS 재학습하면서 중간 점검 및 기본적인 알고리즘 학습과 코테 대비
3. 남들이 안쓰는 이유가 있다지만 앞으로의 나의 주언어가 될 것이기 떄문!!!<br>
-> node.js로는 못푸는 문제들이 있고, 한달전 백준 공식 이슈도 있었다.ㅠㅠㅠㅠ

## 👍Node.js 입출력 방법 
아래의 입력 방법을 통해서 고생을 덜으셨으면 좋겠습니다..
### 한줄 입력시
```js
let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 
```
- 예제
  ```js
  let input = require('fs').readFileSync('/dev/stdin').toString().split(" "); 

  let num = Number(input);

  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
  ```
### 여러줄 입력시
```js
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n"); 
```
- 예제
  ```js
  let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
    
  let line0 = input[0].split(' ');
  let line1 = input[1].split(' ');
  let line2 = input[2].split(' ');
  ```


### 테스트케이스 시
- 예제
  ```js
  let input = `10 10`.split(' ');      

  let numH = Number(input[0]);
  let numM = Number(input[1]);
  let numZ = numH * 60 + numM;

  numZ -= 45; 

  if(numZ < 0 ){
      numZ =  1440 - (-numZ);
  }

  console.log(parseInt(numZ /60) + " " + parseInt(numZ % 60));
  ```

### 슬라이스 시
- 예제
  ```js
  let input = `10 10
  10 20
  10 30
  10 40`.split('\n');

    for(let i = 0; i < input.length; i++) {
        let value = input[i].split(' ');

        for(let j = 0; j < value.length; j++) {
            console.log(value[j]);
        }
    }
  ```