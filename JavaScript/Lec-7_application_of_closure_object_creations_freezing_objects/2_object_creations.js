/**
 *  Ways to create object in JS?
 *    1. object literals {};
 *    2. Object.create();
 *    3. Function Constructor
 *    4. class constructor using ES6 syntax
 */

/**
 *   1. object literals {};
 * 
 *      const obj = {
 *          preopertyName: propertyValue 
 *      }
 * 
 */

const person =  {
    name: 'Piyush',

    address: {
        street: 'MZ-123',
        city: 'Banglore'
    },

    greetMsg: function(){
        console.log(`hello ${this.name}`);
    }
}
console.log(person);
console.log(person.greetMsg());

/**
 *  How are we able to use methods and properties of primitive data types even though they don't have methods and properties;
 *     -> temporary wrapper objects -> These are objects that converts the primitive value into an object.
 * 
 *         string -> String 
 *         num -> Number
 *         boolean -> Boolean
 *         null and undefined -> no parent
 * 
 *    -> When a method is called over a string variable, 
 *       JS automatically converts the primitive into their corresponding wrapper objects.
 * 
 *       That's why JS wraps the primitive via wrapper object and calls the methods/properties.
 * 
 *    -> hierarchy of built-in objects
 * 
 *         let arr = [];
 *         console.log(arr);
 *  
 *          obj -> Object
 *          arr-> Array -> Object
 *          function -> Function
 *          string -> new String("Hello Ashwani");
 *          number -> new Number(20);
 *          boolean -> new Boolean(false)
 * 
 *       To check the parent object explicitly, then you can use the Object.getPrototypeOf(str)
 */


const str = 'Hello Ashwani';
// str.charAt(0);
console.log(str.toUpperCase());
console.log(str);

const num = 10.089;

console.log(num.toFixed(2));

/**
 *  2. Object.create() -> creates a new object and links it to the prototype of an exsiting object.
 * 
 *     syntax: Object.create(proto, propertiesObject);
 * 
 *             proto: represents the prototype of new object
 *             propertiesObject: used to specifiy which property descriptors should be added to the newly created object.
 * 
 *     1. Creating an object without any parent?
 * 
 *          const obj = Object.create(null);
            obj.name = 'Ashwani Rajput';
            console.log(obj);

        2. Creating an object from another object


        IQ: what is the difference b/w object literal and Object.create();

            Object.create() -> doesn't create the reference to an existing object 
                              but rather it always create a new object with a prototype link. 
                            -> always a shallow copy of any existing object.

            Object literals -> a new object is created with its own set of properties and method.
                            -> but due to call by reference it will modify the original object.

        IQ: object literal create the same ref or different ref?

            const obj1 = {};
            const obj2 = {};

            console.log(obj1 === obj2); they create new ref and that's they have different refs.

 * 
 * 
 */

const obj = Object.create(null);

obj.name = 'Ashwani Rajput';

console.log(obj);



const obj2 = {
    name: 'Ashwin',
    address: {
        city: 'Delhi'
    },
    greetMsg: function() {
        console.log(`Hello ${this.name}`);
    }
}

const obj3 = Object.create(obj2);

obj3.name = 'Dushyant';

console.log(obj3);
console.log(obj2);


for(const key in obj2) {
    console.log(obj2[key]);
}


/***
 *   Object.keys(object)
 * 
 * 
 */

const obj5 = {
    name: 'Ashwin',
    address: {
        city: 'Delhi'
    }
}

console.log(Object.keys(obj5));

const keys = Object.keys(obj5); // returns the iterable keys(an array of keys) from object obj5

for(const key of keys) {
    const value = obj5[key];
    console.log(`Key: ${key}, Value: ${value}`);
}


/**
 *  Constructor Function -> To define the class in ES5 way
 *    
 *    function ConstructorFunctionName(property) {
 *      this.property = property
 *    }
 * 
 *    const newObj = new ConstructorFunctionName(objValue);
 */


function Person(name, age) {
   this.name = name;
   this.age = age;

   this.greetMsg = function() {
     console.log(`Hi i am ${this.name} and ${this.age}`)
   }
}

Person.prototype.sayHi = function() {
    
}

const ashwin = new Person("Ashwin", 30);

console.log(ashwin);


/**
 *   using ES6 class -> to define a class and create an object
 * 
 * 
 * 
 */

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetMsg() {
        console.log(`Hi i am ${this.name} and ${this.age}`)
    }
}

const ashwani = new Person1("Ashwani", 32);
console.log(ashwani);
console.log(ashwani.greetMsg());