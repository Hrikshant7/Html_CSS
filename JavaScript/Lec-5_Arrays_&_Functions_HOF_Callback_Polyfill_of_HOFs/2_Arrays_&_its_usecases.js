/**
 *  what do you men by array in JS?
 * 
 *     -> an ordered list of values. Each value is called an element based on its index.
 *     -> const arr = ['1', "hello", 20.3, 4];
 *     -> arr[2] = 20.3
 * 
 *   Most used methods of an array?
 * 
 *     1. splice() : you modify the array (add, remove the elements)
 *        array.splice(start, deletecount, item1, item2,...,itemN)
 * 
 *     2. slice(): returns an array that contains the shallow copy of a portion of an array.
 * 
 *     3. concat(): concatenates the given arguments into the string or merge the arrays.
 * 
 *     4. split(): convert the string into an array
 * 
 *     5. join(): to convert an array into a string with taking some separate.
 *  
 *     6. trim(): to remove the white spaces from the string.
 * 
 * 
 */

const arr = ['1', "hello", 20.3, 4];
// console.log(arr);

// const splicedArr = arr.splice(1,2);

// console.log("Arrays", arr, splicedArr);


const arr1 = arr.slice(1,3);

console.log("Arrays", arr, arr1);


const arr2 = [1,2,3,4,5];
const arr3 = [100,200,300,400,500];
console.log(arr2, arr2.concat(arr3));


// convert the string into an array
let str = "Hello Ashwani Rajput";
console.log(str.split(' '));

// array as an object
const arrObj = [
    1,
    1.1,
    true,
    null,
    "Ashwani",
    {name: "Ashwin"},
    [1,2,3,4,5],
    function sayHello() {
        console.log("Hey i am fn inside an array")
    }
];

for(let key in arrObj) {
    console.log("Key:", key, "Value:", arrObj[key]);
}

// Lets take a break of 10 mins, and let me fix this meanwhile, ok.






