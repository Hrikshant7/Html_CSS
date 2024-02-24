/**
 *  What is lexical scope?
 *    
 *    - A lexical scope allows a function scope to access the variables in outer scope. 
 *      The outer scope is determined wrt a function definition only where 
 *      we defined the function scope in code of JS file.
 *     
 * NOTE: fn call is not used to determine the outer scope.
 * 
 * 
 * 
 * 
 */


var varName = 10;

function b() {
    console.log('in b', varName);// 10
}

function fn(){
    var varName = 20;
    b();
    console.log(varName); // 20
}

fn();

//o/p -> in b 10 20


/**
 *  what is closure in JS?
 * 
 *    -> closure is a JS lexical scoping technique used to preserve 
 *       the variables from a function's outer scope to its inner scope.
 * 
 *    -> In lexical scoping, the scope of a vaibale is defined by its position in the source code.
 * 
 */

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }

    return innerFunction;
}

const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());

// console.log(outerFunction()());// 1


/**
 * Nested closure:
 *   - A nested closure occurs when an inner function references variables or params defined in an 
 *     outer function, and inner function references the outer function variables.
 */

let iamInGEC =  10;

function getFirstName(firstName) {
    console.log('i have got your firstname');

    return function getLastName(lastName) {
        console.log("i have got your last name");

        return function greeter(){
            console.log(`Hi I am ${firstName} ${lastName}`);
            console.log('I am in GEC', iamInGEC);
        }
    }
}

const fnRtn = getFirstName('Ashwani');

const lnRtn = fnRtn('Rajput');

lnRtn();


