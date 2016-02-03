// map() 메소드는 배열 내의 모든 요소 내에서 제공된 함수를 호출하여 그 결과로 새로운 배열을 생성합니다. from mdn

var name = 'shane osbourne';

var upper = name.split(' ') // [shane, osbourne]
        .map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');  // [Shane, Osbourne]

console.log(upper);