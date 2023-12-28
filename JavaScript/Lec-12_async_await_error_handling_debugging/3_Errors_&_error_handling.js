/**
 *   Errors and types of errors in JS.
 * 
 *   Error:
 *      - means some mistaken is happened within the code.
 * 
 *   types of Errors there in JS?
 *    1. syantx error: means syntax violation in the code.
 *        le a;
 *        console.log(a);
 *  
 *    2. Runtime error: only get to know after executing the code and it will fail on the point where you made a mistake.
 *       1. Reference Error
 *       2. Type Error
 *       3. Range error
 *       4. Network Error
 *       5. DOM Exception
 *       6. Internal Error: try...catch...finally block
 * 
 *   // How to debug the code in JS over the browser?
 * 
 *      1. Console.log();
 *      2. debugger pointer in the browser.
 * 
 */

// let a;
// console.log(a);

// const d = 20;


// Reference error:
// console.log(a);
// let a;


// function fn() {
//     console.log('Hello');
// }
// fn();

let num  = 10.9876;

// console.log(num.toUppercase()); // Type error

console.log(num.toFixed(2));

function foo() { //RangeError: Maximum call stack size exceeded
    foo();
}

foo();


