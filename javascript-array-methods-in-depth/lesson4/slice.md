**배열의 일정 부분을 반환합니다.** 

#구문

```javascript
arrayObj.slice(start, [end]) 
```

###Parameters
####arrayObj
필수 요소. Array 개체입니다.
####start
필수 요소. arrayObj에 대한 지정된 부분의 시작입니다.
####end
선택 사항입니다. arrayObj에 대한 지정된 부분의 끝입니다.

###반환 값
콜백 함수가 true를 반환하는 모든 값을 포함하는 새 배열입니다.콜백 함수가 array1의 모든 요소에 대해 false를 반환하는 경우 새 배열의 길이는 0입니다.

###예외
callbackfn 인수가 함수 개체가 아닌 경우 TypeError예외가 throw됩니다.

##설명

slice 메서드는 arrayObj의 지정된 부분을 포함하는 Array 개체를 반환합니다.
slice 메서드는 end로 표시된 요소 앞까지만 복사하고 요소 부분은 포함하지 않습니다.
start가 음수이면 length + start로 처리됩니다. 여기서 length는 배열의 길이입니다.
end가 음수이면 length + end로 처리됩니다. 여기서 length는 배열의 길이입니다. end를 생략하면 arrayObj의 끝까지 계속 추출됩니다. end가 start 앞에 나오면 새로운 배열에 아무 요소도 복사되지 않습니다.
