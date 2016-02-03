**지정한 위치에서 시작하고 지정한 길이인 부분 문자열을 가져옵니다.** 

#구문

```javascript
stringvar.substr(start [, length ])
```

###Parameters
####stringvar
필수 요소.부분 문자열이 추출되는 String 개체 또는 문자열 리터럴입니다.
####start
필수 요소.원하는 부분 문자열의 시작 위치입니다.문자열에서 첫 번째 문자의 인덱스는 0입니다.
####length
선택 사항입니다.반환된 부분 문자열에 포함할 문자 수입니다.

##설명

length가 0 또는 음수이면 빈 문자열이 반환됩니다.length를 지정하지 않으면 stringvar이 끝날 때까지 부분 문자열이 계속됩니다.