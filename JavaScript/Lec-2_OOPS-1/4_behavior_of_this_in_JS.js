/***
 *  understand the behavior of this in JS?
 *                       non-strict          strict
 *    GEC                window Object      window object
 *    function call      window object      undefined
 *    method call        current object     current object
 * 
 */



let firstVar = "created using let";
var secondVar = "created using var";
console.log("hello from", this);



let person = {
    name: 'Ashwani',
    sayHi: function() {
        console.log('Hi from', this.name);
    }
}

let obj = {
    fname: 'Priyanka'
}

obj.fname;

person.sayHi();// Hi from Ashwani


/***
 *  rules of this
 * 
 *   for GEC -> value of this window.
 *   for EC and created a method that you access via an object(calling that method via object), value of this will be current object.
 * 
 */

let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const iAmInner = function(){
            console.log("55",this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();

// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

/**
 *   Arrow does not follow these rules, it takes this from outside:
 * 
 *    GEC -> this - > window object
 * 
 *    EC is created with -> arrow method call -> this will be the current object 
 * 
 *    EC is created with -> function call -> this will be the window object
 *   
 * 
 */

/**
 *   chaining of methods in JS
 * 
 * 
 */

let ladder = {
    step: 0,

    up() {
       this.step++;
       return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep: function() {
        console.log(this.step);
        return this;
    }
}

// ladder.up();// 1
// ladder.up();// 2
// ladder.up();// 3
// ladder.down();// 3-1=2
// ladder.showStep();// 2

ladder.up().up().up().down().showStep();

// we need to return an object of ladder from every function, we will return this from every function.