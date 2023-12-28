/**
 *  Converting a cb to a promise (Promisify).
 * 
 * 
 */

const fs = require('fs');

// console.log('Before');

// fs.readFile('./f1.txt', (err, data)=>{
//     if(err) {
//         throw err;
//     } else {
//         console.log('' + data);
//     }
// });

// console.log('After');


console.log('Before');

function promiseReadFile(filePath){
    return new Promise((resolve, reject)=>{
       fs.readFile(filePath, (error, data)=>{
            if(data){
                resolve("" + data);
            } else {
                reject(error);
            }
       });
    });
}

const promise = promiseReadFile('./f2.txt');
console.log(promise);

// consuming the promises
promise.then((result)=>{
   console.log(result)
}).catch((error)=>{
   console.log(error);
});

console.log('After');


