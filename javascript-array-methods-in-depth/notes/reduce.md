**배열의 모든 요소에 대해 지정된 콜백을 호출합니다.콜백 함수의 반환 값은 결과에 누적되며 다음에 콜백 함수를 호출할 때 인수로 제공됩니다.** 

#구문

```javascript
array1.reduce(callbackfn[, initialValue]) 
```

###Parameters
####array1
필수 요소.Array 개체입니다.
####callbackfn
필수 요소.최대 4개까지 인수를 허용하는 함수입니다. reduce 메서드는 배열에 있는 각 요소마다 한 번씩 callbackfn 함수를 호출합니다.
####initialValue
선택 사항입니다. initialValue가 지정된 경우 누적을 시작하는 초기 값으로 사용됩니다. callbackfn 함수에 대한 첫 번째 호출은 이 값을 배열 값 대신 인수로 제공합니다.

###반환 값
콜백 함수에 대한 마지막 호출로부터 누적된 결과입니다.

###예외
TypeError 예외는 다음 조건 중 하나가 true인 경우 throw됩니다.

- callbackfn 인수는 함수 개체가 아닌 경우
- 배열에 요소가 포함되지 않고 initialValue가 제공되지 않은 경우

##설명

initialValue가 제공된 경우 reduce 메서드가 배열에 있는 각 요소에 대해 한 번씩 오름차순 인덱스 순서로 callbackfn 함수를 호출합니다.
initialValue가 제공되지 않은 경우 reduce 메서드가 두 번째 요소부터 시작하여 각 요소에 대해 callbackfn 함수를 호출합니다.
콜백 함수의 반환 값은 콜백 함수에 대한 다음 호출의 previousValue 인수로 제공됩니다.콜백 함수에 대한 마지막 호출의 반환 값은 reduce 메서드의 반환 값입니다.
배열의 누락된 요소에 대해 콜백 함수를 호출하지 않습니다.

###콜백 함수 구문
콜백 함수의 구문은 다음과 같습니다.

```javascript
function callbackfn(previousValue, currentValue, currentIndex, array1)
```

매개 변수를 최대 4개까지 사용하여 콜백 함수를 선언할 수 있습니다.

| 콜백 인수       | 정의           |
| ------------- | ------------- |
| previousValue | 콜백 함수에 대한 이전 호출로부터 얻은 값입니다. initialValue가 reduce 메서드에 제공된 경우 previousValue는 함수를 처음 호출할 때의 initialValue입니다. |
| currentValue  | 현재 배열 요소의 값입니다. |
| currentIndex  | 현재 배열 요소의 숫자 인덱스입니다. |
| array1        | 요소가 포함된 Array 개체입니다. |

###콜백 함수에 대한 첫 번째 호출
콜백 함수를 처음 호출할 때 인수로 제공되는 값은 reduce 메서드에 initialValue 인수가 포함되었는지 여부에 따라 달라집니다.

initialValue가 reduce 메서드에 제공된 경우

- previousValue 인수가 initialValue입니다.
- currentValue 인수가 배열에 있는 첫 번째 요소의 값입니다.

initialValue가 제공되지 않은 경우:

- previousValue 인수가 배열에 있는 첫 번째 요소의 값입니다.
- currentValue 인수가 배열에 있는 두 번째 요소의 값입니다.

###Array 개체 수정
배열 개체는 콜백 함수로 수정할 수 있습니다.
다음 표에서는 reduce 메서드가 시작된 후 배열 개체를 수정한 결과를 보여 줍니다.

| reduce 메서드가 시작된 후의 조건 | 콜백 함수에 전달된 요소 |
| ------------- | ------------- |
| 요소는 배열의 원래 길이를 벗어나서 추가됩니다. | 아니요. |
| 요소는 배열의 누락된 요소를 채우도록 추가됩니다. | 예, 해당 인덱스가 콜백 함수에 아직 전달되지 않은 경우 그렇습니다. |
| 요소가 변경되었습니다. | 예, 해당 요소가 콜백 함수에 아직 전달되지 않은 경우 그렇습니다. |
| 요소가 배열에서 삭제됩니다. | 아니요, 해당 요소가 콜백 함수에 아직 전달되지 않은 경우 그렇습니다. |
