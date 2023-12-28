/**
 *  What is function in JS?
 *    -> reusable block of code to accomplish a specific task.
 * 
 *  How many types of functions available in JS?
 * 
 *    -> 1. Normal function
 *            function fnNAme(arg1, arg2, ..., argN) {
 *                 // write the logic here
 *            }
 * 
 *            IQ: can normal function hoisted? -> yes. the normal function declaration can be hoisted;
 * 
 *       2. function expression
 * 
 *           - assigning a function into a varibale
 * 
 *           - const variableName = function(arg1, arg2, ...., argN) {
 *                 // write the logic
 *             }
 * 
 *           IQ: can function expresiion hoisted? -> No, function expression can't be hoisted.
 * 
 *       3. arrow function
 *      
 *          - was introduced in ES6
 *         
 *          - it's compact notation of a normal function. syntactical sugar of normal function.
 * 
 *          - const variableName = (a, b) => a*b; 
 * 
 * 
 */

function fn(name) {
   //console.log(name);
   return name;
}

const returnedName = fn('Ashwani Rajput');

console.log(returnedName);



const multiplyNums = (a, b) => a * b;

console.log(multiplyNums(10, 20));


/**
 *   Some more interesting facts about the functions
 * 
 *    -> Function behaves as an object
 *   
 */

function fn() {
    console.log('hey i am fn');
}

fn.count = 0;

fn.printCount = function() {
    console.log("count is: ", this.count);
}

console.log(fn.count);
fn.printCount();
fn();

// fn().printCount(); -> wont work because there is no use of chaining.

/**
 *   4. HOF (Higher Order Function): tahe functions as a params and return the function.
 * 
 *   5. callback: a callback is afunction that is passed as an argument in an another function.
 * 
 * 
 * 
 */

const arr = [1,2,3,4,5];

// Problem stmt: return array elements square and cube 
// for(let i = 0; i<arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
// }

// console.log(arr);


// const arr1 = [1,2,3,4,5];

// for(let i = 0; i<arr.length; i++) {
//     arr1[i] = arr1[i] * arr1[i] * arr1[i];
// }

// console.log(arr1);

const transformer = (arr, callback) => {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let result = callback(arr[i]); // square(1); // 1 // square(2); // 4 .... so on
    
        newArr.push(result);
    }
    return newArr;
}

const square = (num) => num * num;

const cube = (num) => num * num * num;

const squareArr = transformer(arr, square);
const cubeArr = transformer(arr, cube);

console.log(squareArr);
console.log(cubeArr);





