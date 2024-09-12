// String.prototype.replace()
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"
const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim";
console.log(url.replace("developer", "ROHANPRAJAPATI"));

// String.prototype.trim()
const greeting = '   Hello world!   ';
console.log(greeting);
// Expected output: "   Hello world!   ";
console.log(greeting.trim());
// Expected output: "Hello world!";

/* String.prototype.slice()
    slice(indexStart)
    slice(indexStart, indexEnd) */
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
// Expected output: "the lazy dog."
console.log(str.slice(4, 19));
// Expected output: "quick brown fox"
console.log(str.slice(-4));
// Expected output: "dog."
console.log(str.slice(-9, -5));
console.log(str.slice(-28, -25));
// Expected output: "lazy"
// Expected output: "fox"

//includes

/* String.prototype.split()
    split(separator)
    split(separator, limit) */
const string = 'The quick brown fox jumps over the lazy dog.';
const words = string.split(' '); // word
console.log(words[3]);
// Expected output: "fox"
const choco = string.split(''); // character
console.log(choco[8]);
// Expected output: "k"
const strCopy = string.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
const apple = string.split(' ');
console.log("=>", apple[2]);


