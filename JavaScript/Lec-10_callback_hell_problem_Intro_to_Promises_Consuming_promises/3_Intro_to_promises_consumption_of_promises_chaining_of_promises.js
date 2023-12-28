/***
 *   Inrtoduction to promise:
 * 
 *     Promises solve the problems:
 * 
 *      1. To remove callback hell problem.
 *      2. To build the trust when you are using third party library. (inversion of control-> trust issue)
 * 
 * 
 *   What is promise in JS?
 *   
 *     -> Promise represent the outcome of asynchronous operations in JS.
 * 
 *     -> A promise is an object that represents the eventual completion or (failure) of your async code(operation) and its resulting value.
 * 
 *          object - 1. value (1. initial value (undefined) 2. value that supposed to here, basis success or failure)
 *                   2. state (1. pending(initial value) 2. fullfilled (2.1. resolve(success) 2.2. reject(failure)))
 * 
 *     When should use promoises in JS?
 * 
 *     -> Promises are used to handle the asynchronous task such as making a HTTP request, reading files 
 *        or any another operations that doesn't return the result immediately.
 * 
 * 
 *     What are the promise API?
 * 
 *       new Promise((resolve, reject)=>{async code})
 * 
 *        resolve() method: Promise with state resolved whatever you pass into the method, you get the value
 *        reject() method: PRomise with state rejected whatever you pass into it as its value.
 * 
 *       returns a new promise object.
 *     
 */ 
                                  // scb , fcb
    // const promise  = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve("Success Data");
    //     }, 2000);
    // });



    const promise  = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(200);
            // reject("Data is not fetched");
        }, 2000);
    });

    console.log(promise);


/**
 *   Consumption of promises
 * 
 *       promise.then(scb, fcb);
 *    
 *         scb() method: called when the promise is resolved successfully.
 *         fcb() method: called when the promise is rejected.
 * 
 * 
 *      promise.catch(fcb);
 * 
 * 
 *      promise.finally():
 *  
 * 
 */

// promise.then((data)=>{
//     console.log(data);
// });

// promise.catch((err)=>{
//   console.log(err);
// });

// promise.finally(()=>{
//    console.log("It has to invoke whether incase of success or failure");
// });


promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
   console.log("It has to invoke whether incase of success or failure");
});


/**
 *  promise chaining:
 *    
 *     linking together a series of asynchronous taks to be executed one after another, 
 *     which makes the promises easier to handle their results. 
 */



