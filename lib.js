function sum(numbers) {
    let s = 0;
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    let m = numbers[0];
    return numbers.reduce((prev, curr) => (prev < curr ? curr : prev), numbers[0]);
}

module.exports = {
    sum,
    avg,
    max
};