/**
 *  Imp other methods of promise API (all(), allSettled(), race())
 * 
 *   what is race condition in JS?
 * 
 *     -> A race condition occurs when 2 or more async operations attempt 
 *        to access the shared resource or modify the same data simultaneously 
 *        and due to this the outcome is unpredictable or unexpected.
 * 
 *   1. all():
 * 
 *       -> takes an array of promises and returns a new promise when all input promises fulfill.
 *       -> if any promise rejects then the entire resulting promise ia also going to reject.
 * 
 *   2. allSettled():
 *       -> take an array of promises and returns a new promise that fullfills. when you are consming this returuned promise 
 *          then it will return you an array of object with status and reoslved or rejected values.
 *          when all the input promise shave sttled regradless of the fulfillment or rejection.
 *  
 *   3. race(): 
 *       -> takes an array of promises and returns a new promise that settles the result of the first promise to settle, whether ir resolves or reject.
 */

const promise1 = Promise.resolve(42);
const promise2 = Promise.reject('Hey the data can not be fetched');
const promise3 = Promise.resolve(true);

// const promise = Promise.all([promise1, promise2, promise3]);

// console.log(promise);

// const promise = Promise.allSettled([promise1, promise2, promise3]);

const promise = Promise.race([promise1, promise2, promise3]);

promise.then((values)=>{
    console.log(values); 
}).catch((error)=>{
    console.log(error);
})


