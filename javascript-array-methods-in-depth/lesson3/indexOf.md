**처음으로 나오는 부분 문자열의 위치를 반환합니다.** 

#구문

```javascript
strObj. indexOf(subString[, startIndex])
```
###Parameters
####strObj
필수입니다. String 개체 또는 문자열 리터럴입니다.
####subString
필수입니다.문자열에서 검색할 부분 문자열입니다.
####startIndex
선택 사항 String 개체의 검색을 시작할 인덱스입니다.생략하면 문자열의 처음부터 검색을 시작합니다.

##설명

indexOf 메서드는 String 개체에서 부분 문자열의 시작을 반환합니다.부분 문자열이 없으면 -1이 반환됩니다.
startindex가 음수이면 startindex는 0으로 처리되고,startindex가 가장 큰 인덱스보다 크면 가장 큰 인덱스로 처리됩니다.
검색은 왼쪽에서 오른쪽으로 수행됩니다.이 점을 제외하면 이 메서드는 lastIndexOf와 같습니다.