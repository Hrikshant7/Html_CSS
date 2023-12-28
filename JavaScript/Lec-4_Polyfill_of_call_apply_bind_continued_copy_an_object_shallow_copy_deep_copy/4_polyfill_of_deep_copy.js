/**
 * Algorithm of polyfill of deep copy:
 * 
 *  1. take an object "obj"(could be normal object or nested object).
 *  2. check if obj is primitive or null.
 *  3. create an empty array or object based type of obj
 *  4. Iterate over all properties(keys) of an obj.
 *       5. check if the obj hasOwnProperty(key) -> Object
 *       6. recursively call deepCopy(obj) on the property's value and assign it to deepCopyObj
 *  
 *   7. return deepCopyObj 
 * 
 * 
 */

// Implemnation

function deepCopy(obj) {
    let deepCopyObj = {};
    // Implement the above algo

    return deepCopyObj;
}

const person2 = {
    name: 'Ashwin',
    age: 34,
    address: {
        city: 'Delhi',
        country: 'India'
    }
};

console.log(deepCopy(person2));