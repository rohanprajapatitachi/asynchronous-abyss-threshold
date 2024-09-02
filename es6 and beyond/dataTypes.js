// console.log("muh mae dae dunga chocoooo!!!");
const apple = 99;
let container = "asdf999898";
let condition = true;
let num = null;
let cloud;

console.log(typeof apple);
console.log(typeof container);
console.log(typeof condition);
console.log(typeof num);
console.log(typeof cloud);


// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const y = (x + 1n === x + 2n); // false because 9007199254740992n and 9007199254740993n are unequal
console.log(y);

// Number
const a =  (Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true because both are 9007199254740992
console.log(a);