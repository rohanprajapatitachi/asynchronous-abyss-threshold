const myArray = [2, 4, 6, 8 ,10, 12, 14, 16];
console.log(myArray.slice(3, 5)); // [ 8, 10 ]

// Array.prototype.slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// Array.prototype.splice()
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


// Array.prototype.includes()
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Expected output: true
console.log(pets.includes('elephant'));
// Expected output: false

// push
myArray.push(18)
console.log(myArray);


// Array.prototype.pop()
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// Expected output: "tomato"
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]


// Array.prototype.concat()
// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)
const array11 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array11.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


// SPREAD OPERATOR
const myArray1 = [200, 300];
const myArray2 = [400, 500];
const su = [...myArray1, ...myArray2];
console.log(su);

function sum(x, y, z) {
    return x + y + z;
  } 
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
  // Expected output: 6
  console.log(sum.apply(null, numbers));
  // Expected output: 6
  






