/**
 *  What is object in JS?
 *    -> An object in JS is a collection of key-value pairs where the key is either a number or string and the value can be any valid JS data type.
 * 
 * 
 *  How to iterate the object in JS?
 *   -> for...in loop
 *   -> for(let key in obj) {
 *        console.log(key, obj[key])
 *      }
 * 
 */

let person = {
    name: 'Ashwin',
    isMentor: true,
    2: 'hey'
}

console.log(person);
console.log(person.name);
// console.log(person.2);
console.log(person['2']);

for(let key in person) {
    console.log(key, ':', person[key]);
}