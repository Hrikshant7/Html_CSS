/**
 *    What is polyfill?
 *     -> Polyfills are code snippets or javascript libraries 
 *        that provide moderen functionality to the older browsers or environments 
 *        that don't support those features natively.
 *     -> polyfill means it is filling the gap to compatibility.
 * 
 *   when to use polyfills?
 *   1. cross-browser compatability.
 *   2. Library or framework requirements.
 */

// How to write the polyfill of call().

let obj = {
    name: 'Ashwani',
    sayHello: function() {
        
    }
}

Function.prototype.myCall = function(ctx, ...args) {
    console.log(ctx);
    console.log(...args);
    const currentCtx = ctx || globalThis;

    console.log(currentCtx);

    console.log(this);

    currentCtx.fn = this; // "this" holds the reference of original function that we want to call

    console.log(currentCtx);
    
    const result = currentCtx.fn(...args);

    delete currentCtx;

    return result;
}

const person = {
    name: 'Ashwani Rajput'
};


function greetMsg(message, delimeter, obj) {
    console.log(message + ', ' + this.name + delimeter);
    console.log(obj);
}

console.log(greetMsg.myCall(person, 'Hi', '!', {data: 10} ));





// As HW please write the polyfill of apply and bind.