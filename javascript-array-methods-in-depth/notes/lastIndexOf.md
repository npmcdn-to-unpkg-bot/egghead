**문자열에서 마지막으로 나오는 부분 문자열을 반환합니다.** 

#구문

```javascript
strObj.lastIndexOf(substring[, startindex])
```
###Parameters
####strObj
필수입니다. String 개체 또는 문자열 리터럴입니다.
####subString
필수입니다.문자열에서 검색할 부분 문자열입니다.
####startIndex
선택 사항입니다.검색을 시작할 인덱스입니다.생략하면 문자열의 끝에서 검색이 시작됩니다.

##설명

lastIndexOf 메서드는 String 개체 안에서 부분 문자열의 시작점을 나타내는 정수 값을 반환합니다.부분 문자열이 없으면 -1이 반환됩니다.
startindex가 음수이면 startindex는 0으로 처리됩니다.startindex가 가장 큰 문자 위치 인덱스보다 크면 사용할 수 있는 가장 큰 인덱스로 처리됩니다.
문자열의 마지막 문자부터 검색이 수행됩니다.이 점을 제외하면 이 메서드는 indexOf와 같습니다.