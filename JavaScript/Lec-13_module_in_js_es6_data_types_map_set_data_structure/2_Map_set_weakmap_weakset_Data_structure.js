/**
 *  Data structure in JS:
 *    1. Map
 *    2. Set
 *    3. Weak Set
 *    4. Weak Map
 *   
 *  Object : collections of key-value pairs -> where these keys can be a string or symbol.
 * 
 *  1. Map: collections of key-value pairs ->  keys can be of any data type.
 *  2. Set: a set is a built-in data structure that allows us to store the collection unquie values.
 * 
 * 
 * 
 * 
 * 
 */

const obj = {
    name: "Ashwani",
    address: "Delhi"
};

obj.age = 25;
delete obj.address;

console.log(obj);


const personMap = new Map();

personMap.set('name', "Ashwin");
personMap.set('address', "Delhi");
personMap.set(23, "Ok");
personMap.set('Occupation', "Developer");

console.log(personMap);


// obj.forEach((value, key) => { // TypeError: obj.forEach is not a function
//     console.log("Key", key , "Value", value);
// });

for (let key in obj) {
    console.log(key + ":" + obj[key])
}

personMap.forEach((val, key)=> {
    console.log("Key", key, "Value", val);
});

for (let [key, value] of personMap) {
    console.log("Key", key + ":" + "Value", value);
}


// Set

const uniqueSet = new Set();
uniqueSet.add(1);
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.add(3);
console.log(uniqueSet);
uniqueSet.add("3");

console.log(uniqueSet.delete(2));

console.log(uniqueSet.size);

/**
 *  Weak reference and garbage collection -> play a crucial role in managing the memory in JS.
 * 
 * 
 */

let obj1 = {};

obj1.name = "Ashwin";

console.log('Obj->> ', obj1);

obj1 = null; // the object becomes unreachable and it becomes part of garbage collector.

console.log('Obj->> ', obj1);

// usecase of weak map

let data1 = {username: "Ashwani Rajput"};
let data2 = {address: "Delhi"};

let weakMap = new WeakMap();

 weakMap.set(data1, "Data1");
 weakMap.set(data2, "Data2");

 console.log(weakMap);

 data1 = null;

 console.log(weakMap.get(data1));
 console.log(weakMap.get(data2));

 // WeakSet

 let firstObj={name: "Ashwin"};
 let lastObj = {last: "Rajput"};
 
 let weakSet = new WeakSet();
 weakSet.add(firstObj);
 weakSet.add(lastObj);

 console.log(weakSet);

 firstObj = null;
 console.log(weakSet.has(firstObj));
 console.log(weakSet.has(lastObj));