/**
 *  Important built-in HOF of an array:
 * 
 *    1. forEach() : used to trave array elements;
 *    2. map()
 *    3. filter()
 *    4. reduce(): return you a single value iterating over the array of element based the function passed in it.
 *    5. sort()
 */


const arr = [1,2,3,4,5];

// const square = (num) => num * num;

// arr.forEach((element)=>{
//     square(element);
// });


const totalValue = arr.reduce((total, elem)=>total + elem, 0);

console.log(totalValue);

// cart items

const cartItems = [
    {id:1, name:'Laptop', price: 100000},
    {id:2, name:'Mobile', price: 50000},
    {id:3, name:'Tablet', price: 70000},
];

const totalCartPrice = cartItems.reduce((total, elem) => total + elem.price, 0);
console.log(totalCartPrice);



//Doubt session about nested array
const nestedArr = [1,[2,3],4,[5,[6]]];

console.log(nestedArr.flat(Infinity));




