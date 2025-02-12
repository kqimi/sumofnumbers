"use strict";
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumFor([1, 2, 3, 4])); // 10

function sumWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
console.log(sumWhile([1, 2, 3, 4])); // 10

function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers[0] + sumRecursion(numbers.slice(1));
}
console.log(sumRecursion([1, 2, 3, 4])); // 10

function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // 10
