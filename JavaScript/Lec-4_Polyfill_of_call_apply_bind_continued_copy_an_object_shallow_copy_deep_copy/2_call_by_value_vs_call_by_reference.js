/**
 *    call by value:
 *       -> copy the actual data is passed to a function, so any changes made inside 
 *          the function do not affect the actual/original data.
 */

// Example of call by value:

function callByValue(num) {
   num++;
   console.log(num);// 7
}

let num = 6;

callByValue(num);

console.log(num);// 6

/**
 *  call by reference:
 *    -> call by reference is applicable to objects and arrays.
 *    -> A reference or memory address of the actual data is passed to a function, so any chnages will be made
 *       inside the function then the original data will get modified
 */

function callByRef(data) {
    for(let i =0 ; i<data.length; i++) {
        data[i]*=2;
    }
}

const arr = [1,2,3,4,5];
console.log(arr);//[1,2,3,4,5]

callByRef(arr);

console.log(arr);//[2,4,6,8,10]

// Add items to a shopping cart to e-commerce application
function addToCart(cart, item) {
   cart.push(item);
   return cart;
}

let shoppingCart = [];

addToCart(shoppingCart, "Shirts");
addToCart(shoppingCart, "Pants");

console.log(shoppingCart);



