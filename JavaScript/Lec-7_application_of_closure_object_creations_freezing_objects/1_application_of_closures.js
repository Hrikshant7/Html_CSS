/**
 * Application of closure:
 * 
 *   1. Infinite currying: it's splitting up the function that accepts the arguments/params 
 *      into the several functions that only accept one parameter each.
 * 
 *   IQ: why currying is useful in JS?
 *      1. It helps us to create the HOF.
 *      2. For  building modular resuasble code.
 *      3. It makes the code more readable.
 *      4. It helps us to avoid the same variable multiple times. 
 * 
 * 
 */

// PS: sum(1)(2)(3)();// 6 , sum(10)(20)(30)(40)();// 100 sum(1)();

// sum(1,2,3,4) -> sum(1)(2)(3)(4)

const sum = function(a){
    return function(b){
        // return function(c){
        //     return function(d){
        //         return a+b+c+d;
        //     }
        // }

        if(b){
            return sum(a+b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)(20)(50)());// 10

const sum2 = (...args) => { 
    let sum = 0;
    console.log(args);
    for(let i=0; i <args.length; i++) {
        sum+=args[i];
    }

    return sum;
}


console.log(sum2(1,2,3,4));//10


/**
 *   Application of closure:
 * 
 *   2. How to create private variables via closure? 
 * 
 *     -> Javascript allows you to create private variables voa closure.
 *     -> A closure is a function that can access variables defined in the lexical scope of its parent function(outer function).
 */

function createEvenStack() {
    let items = [];

    return {
        push(item){
            if(item%2==0) {
                items.push(item);
            } else {
                console.log("Please push only even items/values");
            }
        },

        pop(){
            return items.pop();

        },

        items
    }
}

const evenStack = createEvenStack();

console.log(evenStack);

evenStack.push(2);
evenStack.push(5);

console.log(evenStack.items);

console.log(evenStack.pop());

/**
 * Application of closure:
 * 
 *   3. How to memoize a function?
 * 
 *      Memoization:  It's a technique used to optimise the function calls by caching 
 *                    the results of expensive computation based on input arguments.
 * 
 * 
 *     What is the benefit you will get from memoisation of a function?
 *      Memoized functions improve the performance when they are repeatedly called with same arguments.
 */

function calc(n){
    let sum = 0;

    for(let i=1; i<n; i++){
        sum+=i;
    }

    return sum;
}

// console.time();
// console.log(calc(10000000));
// console.timeEnd();

const memoize = (fn) => {
  
    let cache = {};

    return function(n) {

        if(cache[n]) { // '', undefined, false, 0
            return cache[n];
        } else {
            const result = fn(n);
            cache[n] = result;
            return result
        }
    }
}


const memoisedFunc = memoize(calc);

console.time();
console.log('First time', memoisedFunc(10000000));
console.timeEnd();


console.time();
console.log('Second time', memoisedFunc(10000000));
console.timeEnd();

console.time();
console.log('Third time', memoisedFunc(10000000));
console.timeEnd();