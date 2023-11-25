/**
 *  call, apply and bind.
 * 
 *   call() method: 
 *    - used to invoke a function witha specified this value and individual arguments.
 *    - functionName.call(thisArg, arg1, arg2, ..., argN);
 * 
 *   apply() method:
 *    - similar to call method, but it accespts the arguments as an array.
 *    - functionName.apply(thisArg, [array args]);
 * 
 *   bind() method:
 *    - bind create a new function with 
 *      a specified "this" value and pre-set arguments, without immediate invokation.
 *    - const someNewFn = functionName.bind(thisArg, arg1, arg2, arg3...argN);
 *         someNewFn();
 */

const person = {
    name: 'Ashwani Rajput'
};

const person2 = {
    name: 'Dushyant'
}

function greetMsg(message, delimeter, obj) {
    console.log(message + ', ' + this.name + delimeter);
    console.log(obj);
}

//greetMsg('Hello');

greetMsg.call(person, 'Hello', '!', {data:'dummy data'});
greetMsg.call(person2, 'Hi', '.');

greetMsg.apply(person, ["Hallo", '.', ['hey']]);


// Example of bind() method:

const obj = {
    name: 'Ashwani Rajput',
    sayHi: function() {
        console.log('Hello, ' + this.name);
    }
}

const boundSayHi = obj.sayHi.bind(obj);

boundSayHi();

const newObj = {
    name: 'Rahul',
    greet: boundSayHi
};

newObj.greet();// Hello Ashwani Rajput

