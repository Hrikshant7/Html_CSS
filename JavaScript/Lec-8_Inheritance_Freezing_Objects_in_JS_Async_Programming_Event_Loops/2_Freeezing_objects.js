/**
 *  mutable vs immutable objects?
 * 
 *    mutable objects: the objects whose properties or values can be modified.
 * 
 *    immutable objects: the objects whose properties or values can not be modified;
 * 
 * 
 *   How to achive the immutability of objects in JS?
 * 
 *   1. Immutability with ES6 features:
 *    1. For objects: using spread{...} or Object.assign({}, obj);
 *    2. For arrays: map(), filter() and reduce() methods.
 *    3. using deepCopy()
 * 
 *   2. Immutability using built-in methods like Object.freeze() 
 * 
 *      -> Making all properties non-writable and non configurable.
 *      -> making all properties read-only and preventing modifications in the properties of objects.
 *      -> returns you the same object that you passed in, with no changes. 
 * 
 * 
 *      -> Object.seal():
 *          - preventing the new properties being added to the objects and making all then properties non-congigurable.
 *          - that means you can't add or remove more properties from sealed objects. 
 *          - modification of values in sealed object is possible/ allowed. 
 */

const obj = {
    name: 'Ashwani Rajput',
    age: 32
};


// obj.data = 10;

const obj1 = Object.freeze(obj);

obj1.name = 'Hemant';

console.log(Object.isFrozen(obj1));// true

console.log(obj1); 
/* {
    name: 'Ashwani Rajput',
    age: 32
}; */

delete obj.age;
console.log(obj);
console.log(obj===obj1);

// Twist in Object.freeze() method

const obj3 = {
    name: 'Ashwani Rajput',
    age: 32,
    address: {
        city: 'Delhi'
    }
};

// const obj4 = Object.freeze(obj3);

// delete obj4.address.city; // deletion of properies of nested object is not possible
// obj4.address.city = 'Banglore'// but modification in nested object is possible.

// console.log(obj4);// Nested object gets modified 

// how you can freeze the nested objects.

// deepFreeze() -> HW



const obj5 = Object.seal(obj3);

console.log(Object.isSealed(obj5));

obj5.data = 'Ashwin';

console.log(obj5===obj3);



