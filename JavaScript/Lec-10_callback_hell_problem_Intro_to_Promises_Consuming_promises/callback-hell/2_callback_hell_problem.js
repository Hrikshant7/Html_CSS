/***
 *   
 *    Async code uses -> callbacks.
 *    1. callback hell problem:
 * 
 *      -> When a callback is calling inside the another callback which will be creating a pyramid of nested callbacks. 
 *         It is known as callback hell problem.
 *         https://medium.com/gousto-engineering-techbrunch/avoiding-callback-hell-97734e303de1
 * 
 *    2. trust issue while using third party library (lib.js)
 * 
 * 
 *    To solve both the above problem promises are introduced.
 */

const fs = require("fs");

console.log("Before");

fs.readFile('./f1.txt', (err, data)=>{
    const content1 = data;
    fs.readFile('./f2.txt', (err, data)=>{
        const content2 = data;
        fs.readFile('./f3.txt', (err, data)=>{
            const content3 = data;
            fs.readFile('./f4.txt', (err, data)=>{
                const content4 = data;
                console.log(content1 + " " + content2 + " " +content3 + " " + content4);
            })
        });
    });
})

console.log("After");