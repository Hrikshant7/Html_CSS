/**
 * Application of closure:
 * 
 *   1. Infinite currying: it's splitting up the function that accepts the arguments/params 
 *      into the several functions that only accept one parameter each.
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