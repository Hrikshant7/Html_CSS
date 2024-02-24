/**
 *  Proxies in JS?
 *     - proxies are objects that allow you to intercept  and cutomise the operations 
 *       which is performed on objects such reading, writing and deleting the properties of objects.
 * 
 */

let obj = {
    name: "Ashwnai Rajput",
    designation: "Developer"
};

// obj.age = 20;

let handler = {
    get(target, prop) {

        if(prop in target) {
            return target[prop];
        } else {
            throw new Error("Property does not exist!!!");
        }
    },

    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value;
        } else {
            throw new Error("Property does not exist!!!");
        }
    }
}

let proxyObj = new Proxy(obj, handler);

console.log(proxyObj.name);// Ashwani Rajput
console.log(proxyObj.age);// throw an error

proxyObj.data = {age: 20}; // not allowing the value inside the proxyobj

