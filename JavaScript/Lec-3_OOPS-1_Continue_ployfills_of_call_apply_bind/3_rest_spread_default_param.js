/**
 *  rest, spread and default param -> Introduced in ES6
 * 
 *  what is rest?
 * 
 *    -> if we are talking about rest , it is rest parameter.
 *    -> Rest param in a function allows you to collect the multiple arguments in an array.
 *    -> syntax:
 *           fn(...args)
 *    -> benefit to use rest -> easier to work with variable-length argument list. 
 * 
 *  what is spread?
 *    -> if we are talking about spread in JS, it is a spread operator.
 *    -> spread out the elements into individual elements from an array or object.
 *    -> syntax: ...
 *    -> benefit of using spread -> promotes immutability.
 * 
 *  what is default parameter?
 *   -> fn(num=0), if you don't pass 
 *      the argument value from the calling method then the default param value can be defined or used.
 *  
 *   
 */

// PS-1: find the maximum number findMax(10,20,30); // 30

function findMax(...numbers) {

    console.log(numbers);
    console.log(...numbers);

    return Math.max(...numbers);

}

// Example of default param

console.log(findMax(-1,0,-3, 4));

function fn(data = {}) {
  return data;
}

console.log(fn({a:10, b:20}));

