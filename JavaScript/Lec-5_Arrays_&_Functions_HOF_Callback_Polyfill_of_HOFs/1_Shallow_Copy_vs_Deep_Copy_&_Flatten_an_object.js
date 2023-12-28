/**
 *   shallow copy vs deep copy:
 * 
 *       shallow copy                                             deep copy 
 *    1. copies the top-level structure                   1. copies the entire structure
 *    2. shares the references of the nested objects.     2. creates the independent copies of nested objects.
 *    3. Memory efficient, faster.                        3. Memory intensive, slower.
 *    4. Changes propagates to the original.              4. Changes are isolated from the original.
 * 
 *   To solve the problem of deep copy -> MEmory intensive, slowerness. -> flattening an object
 * 
 */

/**
 *  How to flatten an nested object?
 * 
 */

const nestedObj = {
    person: {
        name: {
            first: 'Ashwani',
            last: 'Rajput'
        },
        age: 34,
        address: {
            street: "Sector-70",
            city: 'Delhi',
            country: 'India'
        }
    },
    hobbies: ["Reading", "R&D", "Teaching"],
    isActive: true
}; // prototype of this nested Object -> Object

/**
 *  o/p:
 * 
 *    {
 *      person.name.first: 'Ashwani',
 *      person.name.last: 'Rajput',
 *      person.age: 34,
 *      person.address.street: 'Sector-70',
 *      person.address.street: 'Delhi',
 *      person.address.street: 'India',
 *      hobbies.0: "Reading",
 *      hobbies.1: "R&D",
 *      hobbies.2: "Teaching",
 *      isActive: true
 *    }
 */
 
// const flattenObject = () => {

// }

function flattenObject(obj, delimeter = '.', parentKey='') {
    const flattened = {};

    for(const key in obj) {
       if(Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = parentKey ? `${parentKey}${delimeter}${key}` : key;

            if(typeof obj[key] === 'object' && obj[key] !== null) {
                Object.assign(flattened, flattenObject(obj[key], delimeter, newKey ));
            } else {
                flattened[newKey] = obj[key];
            }
       }
    }

    return flattened;
}

console.log(flattenObject(nestedObj));

const obj = flattenObject(nestedObj);

for(const key in obj) {
    console.log(obj[key]);
}