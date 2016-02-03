**Array를 정렬합니다.** 

#구문

```javascript
arrayobj.sort(sortFunction) 
```

###Parameters
####arrayObj
필수 요소.임의의 Array 개체입니다.
####sortFunction
선택 사항입니다.요소 순서를 결정하는 데 사용되는 함수의 이름입니다.인수를 생략하면 요소가 오름차순, ASCII 문자 순서로 정렬됩니다.

###반환 값
정렬된 배열입니다.

##설명

sort 메서드는 Array 개체를 제자리에 정렬하지만 실행 중에 새로운 Array 개체를 만들지는 않습니다.
sortFunction 인수에 함수를 지정하면 다음 값 중 하나가 반환됩니다.

- 처음 전달된 인수가 두 번째 인수보다 작을 경우 음수 값
- 두 인수가 같을 경우 0
- 처음 전달된 인수가 두 번째 인수보다 클 경우 양수 값
