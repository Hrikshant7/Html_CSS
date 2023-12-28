/**
 *    What is polyfill?
 *     -> Polyfills are code snippets or javascript libraries 
 *        that provide moderen functionality to the older browsers or environments 
 *        that don't support those features natively.
 *     -> polyfill means it is filling the gap to browser compatibility.
 * 
 *   when to use polyfills?
 *   1. cross-browser compatability.
 *   2. Library or framework requirements.
 */

// How to write the polyfill of call().

// let obj = {
//     name: 'Ashwani',
//     sayHello: function() {
        
//     }
// }

// Function.prototype.myCall = function(ctx, ...args) {
//     console.log(ctx);
//     console.log(...args);
//     const currentCtx = ctx || globalThis;

//     console.log(currentCtx);

//     console.log(this);

//     currentCtx.fn = this; // "this" holds the reference of original function that we want to call

//     console.log(currentCtx);
    
//     const result = currentCtx.fn(...args);

//     delete currentCtx;

//     return result;
// }

// const person = {
//     name: 'Ashwani Rajput'
// };


// function greetMsg(message, delimeter, obj) {
//     console.log(message + ', ' + this.name + delimeter);
//     console.log(obj);
// }

// console.log(greetMsg.myCall(person, 'Hi', '!', {data: 10} ));


// As HW please write the polyfill of apply and bind.

// Lets write the polyfill of bind.

//const funcHolder = fn.bind(thisArg, arg1, arg2,...,argN); // return a function
//funcHolder();

// fn.call(thisArg, arg1, arg2, ...argN);
// fn.apply(thisArg, [arg1, arg2, ...argN]);
 
Function.prototype.myBind = function(ctx, ...args) { // converted args = [arg1, arg2,...,argN]

    //console.log(args);
    const cb = this; // cb-> callback which holds the reference of this -> will the original function(showPersonDetails);
    
    //console.log(this);
    return function(...innerArgs) {
       // console.log(innerArgs);
        // return cb.apply(ctx, args.concat(innerArgs));
       return cb.apply(ctx, [...args, ...innerArgs]); // calling a function
    }
}

const person = {
    firstName: 'Ashwani',
    lastName: 'Rajput'
};

function showPersonDetails(city, country, greetMsg) {
   console.log(`${greetMsg}, ${this.firstName} ${this.lastName} - ${city} ${country}`)
}

const showDetails = showPersonDetails.myBind(person, "Delhi", "India"); // will return function

showDetails("Hey");// calling function

