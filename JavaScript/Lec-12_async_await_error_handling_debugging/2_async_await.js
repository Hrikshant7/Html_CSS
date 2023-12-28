/**
 *   async/await:
 *    -> introduced in ES8(2017) -> async/await
 *    -> syntactic sugar of consuming the promises.
 *    -> provide a concise and readable way to write the asynchronous code in JS.
 * 
 *    Summary:
 *     -> await will always be using with async.
 *     -> async keyword is used with fn always that return a pending promise 
 *        so use the await for returning your promise and based resolve/reject of promise you show in your UI
 */

const fs = require('fs/promises');

console.log('Before');

const promise = fs.readFile('./f11.txt');

// (async()=>{// using IIFE
//     const content = await promise;

//     console.log("" + content);
// })();

const fn = async() =>{
   try{
    const content = await promise;
    console.log("" + content);

   }catch(err){
     console.log(err.message)
   }finally{
     console.log("Please close the file!!!");
   } 
}

fn();

console.log('After');