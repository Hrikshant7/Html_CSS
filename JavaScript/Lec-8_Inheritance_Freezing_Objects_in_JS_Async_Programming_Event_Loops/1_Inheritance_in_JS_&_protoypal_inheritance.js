/**
 *   What is inheriatance?
 *  
 *     - inheritance means reusability.
 *     - Using inheritance, you can define classes that inherit few or all properties or methods of their parents class 
 *       and add new additional functionalities
 *     
 *   How to achieve inheritance in JS using ES6?
 * 
 *      - in JS, you will use extends keyword in ES6
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetMsg() {
        console.log(`Hey, I am in parent class and my name is ${this.name}`)
    }

    greetMsg(name) {
        console.log(`${name}`);
    }

    sayHi() {
        console.log(`Hi, i am in Super class method and my name is ${this.name}`)
    }
}

class Human extends Person {

    constructor(name, age) {
        super(name, age);
    }

    sayHi() {
        this.greetMsg('Hemant');
        super.sayHi();
        console.log(`Hey, i am in Human class and my name is ${name}`)
    }
}

const ashwani = new Human("Ashwani", 30);
ashwani.sayHi("Dushyant");
ashwani.greetMsg();


/**
 *   What is prototypal inheritance?
 * 
 *     -> In JS, prototypal inheritance is used to add properties and methods to the objects.
 *     -> nowadays __proto__ is used to set it in modern programming languages
 * 
 * 
 */

 const candidate = {
    fly: true,
    canTalk() {
        return 'Sorry, i am not talking for now!!'
    }
 }

 const user = {
    canCook: true,
    canYouCode() {
        return 'you can not code';
    },
    __proto__: candidate
 }

 console.log(user.fly);
 console.log(user.canTalk());
 console.log(user.canYouCode());





//In ES5, using constructor function
// function Person1(name, age) {
//      this.name = name;
//      this.greetMsg = function() {

//      }
// }