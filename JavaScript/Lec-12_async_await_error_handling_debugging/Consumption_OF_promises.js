/***
 *   Consumption of the promises:
 * 
 *     how do you consume the promises?
 * 
 *        create a promise
 *        consume the promise via then((scb)=>{scb();})/ catch((fcb)=>{fcb()})
 * 
 */

const fs = require('fs/promises');

console.log('Before');

//const promise  = fs.promises.readFile('./f1.txt');
const promise  = fs.readFile('./f1.txt');

// console.log(promise);

promise.then((content)=>{
   console.log("" + content);
}).catch((err)=>{
   console.log(err);
})

console.log('After');