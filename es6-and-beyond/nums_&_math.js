// +++++++++ Math +++++++++
console.log(Math);

// Math.round()
console.log(Math.round(99.99));
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// -5 -5 -6

// Math.abs() 
console.log(Math.abs(-8)); // returns only positive 
function difference(a, b) {
    return Math.abs(a - b);
};
console.log(difference(3, 5));
// 2
console.log(difference(5, 3));
// 2
console.log(difference(1.23456, 7.89012));
// 6.6555599999999995

// Math.ceil()
console.log(Math.ceil(0.95));
// 1
console.log(Math.ceil(4));
// 4
console.log(Math.ceil(7.004));
// 8
console.log(Math.ceil(-7.004));
// -7

// Math.floor()
console.log(Math.floor(5.95));
// Expected output: 5
console.log(Math.floor(5.05));
// Expected output: 5
console.log(Math.floor(5));
// Expected output: 5
console.log(Math.floor(-5.05));
// Expected output: -6

// Math.random()
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
console.log(getRandomInt(3));
// Expected output: 0, 1 or 2
console.log(getRandomInt(1));
// Expected output: 0
console.log(Math.random());
// Expected output: a number from 0 to <1




