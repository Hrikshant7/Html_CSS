/***
 *   What is inheritance?
 *  
 *     -> means reusability.
 *     -> a mechanism that allows objects to inherit the properties and methods from other objects.
 */

let obj = {};
console.log(obj);

let person = {
    name: "Kamal",
    age:34
}
console.log(person);

// for every object in JS, Object is the parent and you can inherit its few or all 
// the properties and methods of Object.

console.log(person.hasOwnProperty('name'));// true
console.log(person.hasOwnProperty('gender'));// false

// obj -> Object

let arr = [1,2,3,4,5];
console.log(arr); //[1,2,3,4,5]

arr.push("hello");
console.log(arr);
console.log(arr.length);

// arr-> parnet Array -> parent Object


/**
 *  what is prototype?
 * 
 *    -> A prototype is an object that links a particular object by default.
 * 
 *    -> That means whenever you create an object, this [[prototype]] object is always 
 *       linked to that particular object.
 * 
 *  what is prototypal inheritance?
 *    ->  Prototypal inheritance allows objects to inherit 
 *        the properties and methods from their prototypes.
 * 
 *  What is prototype chaining?
 * 
 *   -> When the prototype of object linked with 
 *      the prototype of another object and so on, This is known as prototype chaining.
 * 
 *      [] -> Array(0) -> Object
 * 
 *  What is the advantage of using inheritance?
 *    1. reuse of the code.
 *    2. Saves the memory space as well.
 * 
 */

// Problem:

  const arr1  = [1,2,3,4];//10
  const arr2 = [1,2,3,4,5,6];//21

//   arr1.sum = function() {

//     let sum = 0;
//     console.log(this);

//     for(let i = 0; i <this.length; i++) {
//         sum+=this[i];
//     }

//     console.log(sum);
//   }

//   arr1.sum();

//   arr2.sum =function() {

//     let sum = 0;
//     console.log(this);

//     for(let i = 0; i <this.length; i++) {
//         sum+=this[i];
//     }

//     console.log(sum);
//   }

//   arr2.sum();

  // To solve the above problem, we should attach/define the sum method to the proptype of Array

  Array.prototype.sum = function() {
    let sum = 0;

    for(let i = 0; i <this.length; i++) {
        sum+=this[i];
    }

    return sum;
  }

  console.log(arr1.sum());
  console.log(arr2.sum());

  










