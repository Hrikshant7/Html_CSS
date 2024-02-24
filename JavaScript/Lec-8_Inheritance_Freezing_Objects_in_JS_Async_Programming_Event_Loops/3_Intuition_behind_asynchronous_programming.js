/**
 *   For intitution behind using asynchronous programming please refer the notes.
 * 
 *     - What is the synchronous code?
 * 
 *       - the code that will execute line by line.
 *       - synchronous means blocking.
 * 
 *    - What is asynchronous code?
 *       
 *       - it's a non-blocking code, that allows multiple tasks 
 *         to run simultaneously without waiting for each task to finish before moving on to the next one. 
 * 
 * 
 */


// Writing the synchronous code
// console.log('Before');

// const fn = () => {
//     for(let i=0; i<10000000000; i++);
//     console.log('i am fn');
// }
// fn();

// console.log('After');


// Writing the asynchronous code in JS

console.log('Before');

const fn = () => {
    console.log('i am fn');
}

setTimeout(fn, 5000); // 2000 means milliseconds delay -> 2s

console.log('After');

/**
 * Before
 * After
 * i am fn
 */