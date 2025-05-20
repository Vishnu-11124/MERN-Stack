
// Strings are immutable (Not changable)

let name = 'harry'
console.log(name[4]);

console.log(`Length of the name is ${name.length}`);

let b = "Jinwoo"
console.log(`Lowercase : ${b.toLowerCase()}`);
console.log(`Uppercase : ${b.toUpperCase()}`);
console.log(`Length : ${b.length}`);

// ---- String slice
console.log(`Slice : ${b.slice(1,4)}`);

// ---- String replace
console.log(`Replace : ${b.replace('oo','u')}`); // Replacing 'OO' with 'u'.

// ---- String concatenation
console.log(`Concatenation : ${b.concat(name)}`);

// ---- trim() : Removes white spaces from the starting and ending.