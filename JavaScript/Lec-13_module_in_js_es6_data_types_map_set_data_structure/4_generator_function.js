/**
 *  what is generator function?
 * 
 *     It's a function that can be paused and resumed during execution, allowing you to generate a sequeunce of values lazily.
 * 
 *     syntax:
 *     function* nameofthe function() {
 *      // logic
 *      yield value1;
 *      // more code;
 *      yield value2;
 *      // more code
 *      ....
 *     }
 * 
 *   Summary:
 *     - when you call a genertor function, it doesn't execute the whole function at once.
 *     - Instead it returns an iterator object. you can use the next() method on the iterator to retrieve the next value from the generator.
 */

function* countdownGnenerator(count) {
    while(count > 0) {
        const signal = yield count;
        console.log("Recieved Signal is:", signal);
        count--;
    }
}

const iterator = countdownGnenerator(5);
console.log(iterator);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next("Pause here").value);
console.log(iterator.next().value);
console.log(iterator.next().value);