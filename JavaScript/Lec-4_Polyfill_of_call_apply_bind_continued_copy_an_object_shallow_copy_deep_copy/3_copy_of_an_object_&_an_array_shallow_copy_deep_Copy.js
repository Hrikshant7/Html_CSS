/**
 *  How to copy an objec or an array in JS?
 */

const person = {
    name: 'Ashwin',
    age: 34,
    address: 'Delhi',
    // address: {
    //     city: 'delhi'
    // }
};

//copy an object
// const person1 = person;

// person1.name = 'Hemant';

// console.log(person1);// to update or modify some temporary object that is ok.

// console.log(person); // But it also still modifying the original data/object;


/**
 * shallow copy in JS:
 *   -> helps to not chnage the original object if we modify the temp object.
 *   -> A shallow copy will create a new copy of top level properties of an object 
 *      but it doesn't create a new of nested object's properties
 * 
 *   -> ways to implement the shallow copy of an object/array.
 * 
 *      1. spread operator (ES6)
 *      2. Object.assign({}, person);
 *      3. Object.create();
 */

const person1 = {...person};

person1.name = "Hemant";

console.log(person);
console.log(person1);

const arr = [1,2,3,4];

const arr1 = [...arr];
arr1.push(5);
console.log(arr);
console.log(arr1);





// Creating a problem in shallow copy

const person2 = {
    name: 'Ashwin',
    age: 34,
    address: {
        city: 'Delhi',
        country: 'India'
    }
};

// const person3 = {...person2};

// person3.age = 40;
// person3.address.city = 'Banglore';

// console.log(person2);
// console.log(person3);

// Problem of above nested object: -> Shallow copy modifying the nested object.

/**
 *   To solve the above problem, deep copy came into the picture.
 *    
 *   What is deep copy in JS?
 *     -> Deep copy creates an independent copy of an object and array, 
 *        including the original the nested object or an array. 
 * 
 *     -> if you modify the nested object, it will not modify the original object.
 * 
 *     -> To implement the deep, there is a way:
 *        1. const str = JSON.stringfy(nestedObject);
 *        const deepClone = JSON.parse(str);
 * 
 *         or JSON.parse(JSON.stringify(nestedObject));
 * 
 *       2. window.structuredClone();
 * 
 *            -> // It is bit slow for processing the bigger nested object.
 * 
 */


const person3 = JSON.parse(JSON.stringify(person2));

person3.age = 40;
person3.address.city = 'Banglore';

console.log(person2);// via deepCopy or deep cloning won't modify the nested objects person2
console.log(person3);// person3 is getting modified



