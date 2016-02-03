**콜백 함수에 지정된 조건을 충족하는 배열의 요소를 반환합니다.** 

#구문

```javascript
array1.filter(callbackfn[, thisArg])
```

###Parameters
####array1
필수 요소.Array 개체입니다.
####callbackfn
필수 요소.최대 3개까지 인수를 허용하는 함수입니다. filter 메서드는 배열에 있는 각 요소마다 한 번씩 callbackfn 함수를 호출합니다.
#####콜백 함수 구문
```javascript
function callbackfn(value, index, array1)
```

####thisArg
선택 사항입니다. this 키워드가 callbackfn 함수에서 참조할 수 있는 개체입니다. thisArg가 생략되면 undefined가 this로 사용됩니다.

###반환 값
콜백 함수가 true를 반환하는 모든 값을 포함하는 새 배열입니다.콜백 함수가 array1의 모든 요소에 대해 false를 반환하는 경우 새 배열의 길이는 0입니다.

###예외
callbackfn 인수가 함수 개체가 아닌 경우 TypeError예외가 throw됩니다.

##설명

filter 메서드는 배열의 각 요소에 대해 한 번씩 오름차순 인덱스 순서로 callbackfn 함수를 호출합니다.배열의 누락된 요소에 대해 콜백 함수를 호출하지 않습니다.
배열 개체 외에도 filter 메서드를 사용하면 length 속성을 포함하는 개체와 숫자로 인덱싱된 속성 이름을 포함하는 모든 개체에서 사용할 수 있습니다.
