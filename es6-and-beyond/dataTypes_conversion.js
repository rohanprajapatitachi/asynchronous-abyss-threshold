// console.log("muh mae dae dunga chocoooo!!!");
const apple = 99;
let container = "asdf999898";
let condition = true;
let num = null;
let cloud;
const arr = undefined;

console.log(typeof apple);
console.log(typeof container);
console.log(typeof condition);
console.log(typeof num);
console.log(typeof cloud);
console.log(typeof arr);

// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const y = (x + 1n === x + 2n); // false because 9007199254740992n and 9007199254740993n are unequal
console.log(y);

// Number
const a = (Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true because both are 9007199254740992
console.log(a);

let score = true;
console.log("score : ", typeof score);
console.log("score : ", typeof (score));
let valueIntoNumber = Number(score);
console.log(valueIntoNumber);

// "45" => 45
// "45rohan" => NaN
// false => 0; true => 1

let boolean = 0;
let valueBoolean = Boolean(boolean);
console.log(valueBoolean);
// "" => false; "asdf" => true;

console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// Primitive => Stack memory
// 7types: String, Number, Boolean, Null, undefined, Symbol,  BigInt;

//Reference type (Non-Primitive) => Heap memory
// Array, Objects, Functions



