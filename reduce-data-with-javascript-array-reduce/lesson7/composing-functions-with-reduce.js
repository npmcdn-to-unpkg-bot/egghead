function increment(input) { return input + 1; }
function decrement(input) { return input - 1; }
function double(input) { return input * 2 ;}
function halve(input) { return input / 2; }

var initial_value = 1;
//var incremented_value = increment(initial_value);
//var doubled_value = double(incremented_value);
//var final_value = decrement(doubled_value);

//function transform(input) {
//    return ((input + 1) * 2) - 1;
//}

//var final_value = transform(initial_value);

var pipeline = [
    increment,
    increment,
    increment,
    double,
    increment,
    increment,
    halve
];

var final_value = pipeline.reduceRight(function(acc, fn) {
    return fn(acc);
}, initial_value);

console.log(final_value);