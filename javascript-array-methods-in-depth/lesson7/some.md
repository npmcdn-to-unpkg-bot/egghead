**배열의 모든 요소에 대해 지정된 콜백 함수가 true를 반환하는지 여부를 결정합니다.** 

#구문

```javascript
array1.some(callbackfn[, thisArg])
```

###Parameters
####array1
필수 요소.Array 개체입니다.
####callbackfn
필수 요소.최대 3개까지 인수를 허용하는 함수입니다. some 메서드는 callbackfn에서 true를 반환하거나 배열이 끝날 때까지 array1의 각 요소에 대해 callbackfn 함수를 호출합니다.
####thisArg
선택 사항입니다. this 키워드가 callbackfn 함수에서 참조할 수 있는 개체입니다. thisArg가 생략되면 undefined가 this로 사용됩니다.

###반환 값
callbackfn 함수가 배열 요소에 대해 true를 반환할 경우 true이고 그렇지 않으면 false입니다.

###예외
callbackfn 인수가 함수 개체가 아닌 경우 TypeError예외가 throw됩니다.

##설명

callbackfn 함수가 true를 반환할 때까지 some 메서드는 각 배열 요소에 대해 오름차순 인덱스 순서로 callbackfn 함수를 호출합니다.
callbackfn에서 true를 반환하게 하는 요소가 있으면 some 메서드는 즉시 true를 반환합니다. 콜백이 모든 요소에 대해 true를 반환하지 않으면 some 메서드가 false를 반환합니다.
배열의 누락된 요소에 대해 콜백 함수를 호출하지 않습니다.
배열 개체 외에도 some 메서드를 사용하면 length 속성을 포함하는 개체와 숫자로 인덱싱된 속성 이름을 포함하는 모든 개체에서 사용할 수 있습니다.

*[every 메서드(Array)(JavaScript)](https://msdn.microsoft.com/ko-kr/library/ff679981(v=vs.94).aspx)를 사용하면 배열의 모든 요소에 대해 콜백 함수가 true를 반환하는지 여부를 확인할 수 있습니다.*

###콜백 함수 구문
콜백 함수의 구문은 다음과 같습니다.

```javascript
function callbackfn(value, index, array1)
```

매개 변수를 최대 3개까지 사용하여 콜백 함수를 선언할 수 있습니다.

| 콜백 매개 변수 | 정의           |
| ------------- | ------------- |
| value | 배열 요소의 값입니다. |
| index  | 배열 요소의 숫자 인덱스입니다. |
| array1  | 요소가 포함된 Array 개체입니다. |

###Array 개체 수정
배열 개체는 콜백 함수로 수정할 수 있습니다.

| some 메서드가 시작된 후의 조건 | 콜백 함수에 전달된 요소 |
| ------------- | ------------- |
| 요소는 배열의 원래 길이를 벗어나서 추가됩니다. | 아니요. |
| 요소는 배열의 누락된 요소를 채우도록 추가됩니다. | 예, 해당 인덱스가 콜백 함수에 아직 전달되지 않은 경우 그렇습니다. |
| 요소가 변경되었습니다. | 예, 해당 요소가 콜백 함수에 아직 전달되지 않은 경우 그렇습니다. |
| 요소가 배열에서 삭제됩니다. | 아니요, 해당 요소가 콜백 함수에 아직 전달되지 않은 경우 그렇습니다. |
