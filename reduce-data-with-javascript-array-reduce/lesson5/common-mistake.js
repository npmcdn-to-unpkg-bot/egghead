var data = ["vote1", "vote2", "vote1", "vote2"];
function reducer(accumulator, value) {
    if (accumulator[value]) {
        accumulator[value] = accumulator[value] + 1;
    } else {
        accumulator[value] = 1;
    }

    return accumulator;
}

//var sum = data.reduce(reducer);
var tally = data.reduce(reducer, {});

console.log(tally);