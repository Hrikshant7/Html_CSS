/**
 *   Imp HOF - built-in array methods:
 *    1. forEach() - completed
 *    2. reduce() - completed
 *    3. map() -  Executes a callback function on each element of an array. 
 *                This will return a new array with new values. (It will return a shallow copy of an array)
 *    4. filter() - It calls a callback function on each element of an array. Each element's callback function return either true or false;
 *    5. sort() - It's method used to arrange the array's elements either in ascending order or in descending order
 */

// cart items

const cartItems = [
    {id:1, name:'Laptop', price: 100000},
    {id:2, name:'Mobile', price: 50000},
    {id:3, name:'Tablet', price: 70000},
];

// Problem Statement: i want the product names as array of string ['Laptop', 'Mobile', 'Tablet']

const productNames = cartItems.map(item => item.name);
console.log(productNames);

// PS: I want the data from cartItems whose price is greater than 50000.
// const productFilter = () => {

// }

const filteredData = cartItems.filter(item => item.price > 50000);
console.log(filteredData);

// Please sort the cartItems based on the prices. - HW





/**
 *   Polyfill of map(), filter(), reduce() -  array methods -> parent of the array is Array(0)
 */

Array.prototype.myMap = function(cb){ //as per our example - cf represents the callback function item => item.name
    let newArr = [];

    for(let i=0; i<this.length; i++){ // as per our example - this represents the cartItems
        let value = cb(this[i]);
        newArr.push(value);
    }

    return newArr;
}

const productNames1 = cartItems.myMap(item => item.name);
console.log(productNames1);

Array.prototype.myFilter = function(cb){
    let newArr = [];

    for(let i=0; i<this.length; i++){ // as per our example - this represents the cartItems
        if(cb(this[i])){
            newArr.push(this[i]);
        }
    }

    return newArr;
}

const filteredData1 = cartItems.myFilter(item => item.price > 50000);
console.log(filteredData1);


/**
 *  Intuition behind to understand the polyfill of reduce()
 * 
 */

let elems = [1,2,3,4,5];

const sum = (acc, elem) => {
    return acc + elem;  // acc -> first array element
}

const prod = (acc, elem) => {
    return acc * elem;  // acc -> first array element
}

const sumVal = elems.reduce(sum);
console.log(sumVal);


const prodVal = elems.reduce(prod);
console.log(prodVal);

function reducer(arr, cb){
    let acc = arr[0];
    for(let i=1; i<arr.length; i++){
        acc = cb(acc, arr[i]);
    }
    return acc;
}

const sumVal1 = reducer(elems, sum);
console.log(sumVal1);

const prodVal1 = reducer(elems, prod);
console.log(prodVal1);

Array.prototype.myReduce = function(cb, initialVal){
    let acc = initialVal !== undefined ? initialVal : this[0];
    let sidx = initialVal !== undefined ? 0 : 1;
   
    for(let i=sidx; i<this.length; i++) {
        acc = cb(acc, this[i]);
    }
    
    return acc;
}

const sumVal2 = elems.myReduce(sum);
console.log(sumVal2);

const prodVal2 = elems.myReduce(prod);
console.log(prodVal2);


const totalCartPrice = cartItems.myReduce((total, item) => total + item.price, 0);
console.log(totalCartPrice);





