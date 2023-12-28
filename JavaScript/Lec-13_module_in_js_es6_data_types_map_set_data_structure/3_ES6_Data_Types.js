/***
 *   ES6 data types:
 * 
 *      1. BigInt: to handle the interger values exceed(2^63 - 1) or limits of the number data type.
 *      2. Symbol: Symbol data type is a unique and immutable value this will ensure you to provide a unique identifier.
 */

let largerNum = 1242354365457656587863636346233352352525235235235326426216882n;
console.log(largerNum + 1n);

const s1 = "Hi";
const s2 = "Hi";

console.log(s1 === s2); // true // compare by value

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false // compare by reference


const symbol1 = Symbol('data1');
const symbol2 = Symbol('data1');

const person = {
    name: "Ashwani",
    age: 30,
    [symbol1]: "it's me"
}

console.log(person[symbol1]);
console.log(person[symbol2]);

console.log(symbol1.description);
console.log(symbol1.toString());