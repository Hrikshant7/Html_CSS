/***
 *  Serial and parallel execution of async code:
 * 
 *      serial task execution: The tasks that are dependent.
 * 
 *      parallel task execution: The tasks that are independent.
 * 
 *      Lets understand wrt node env.
 * 
 *      Module of nodeJS -> fs
 */

// const fs = require('fs');

// console.log("Before");

// const content1 = fs.readFileSync("./f1.txt");
// const content2 = fs.readFileSync("./f2.txt");
// console.log(content1 + " " + content2);

// console.log("After");

/**
 * is above code a good way to read the content of the file using synchronous way of writing?
 *  -> No the good way.
 * 
 */

// using parallel execution of task or asynchronous way to write the code.

const fs = require('fs');

console.log("Before");

fs.readFile('./f1.txt', (err, data)=>{
    const content1 = data;

    fs.readFile('./f2.txt', (err, data)=>{
        const content2 = data;
        console.log(content1 + "" + content2);

    });
})

console.log("After");