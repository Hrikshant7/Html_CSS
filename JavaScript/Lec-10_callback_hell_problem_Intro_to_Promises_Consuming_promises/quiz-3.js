const fs = require('fs'); // Assuming f1.txt -> i am f1 file
const promise = Promise.resolve("Accepted");

promise.then((data) => {
    console.log("92", data); // 92 10  
}).then((firstThenVal) =>{
    console.log("113", firstThenVal); // 113 undefined
    return 100;
}).then((secondThenVal) => {
    console.log("116", secondThenVal); // 116 100
    return fs.promises.readFile("./f1.txt") 
}).then((thirdThen, error) => { 
    console.log("120 " + thirdThen); // 120 i am f1 file
});

