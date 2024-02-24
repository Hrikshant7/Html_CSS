/**
 * TDZ (Temporal Dead Zone):
 *   
 *    -> A behavior in JS that occurs when you are trying 
 *       to access a variable before it has been decalared with let and const keywords.
 */


//console.log(x); // ReferenceError: Cannot access 'x' before initialization
//const x = 20;

// let and const can't be hoisted (hoisting menas move the declaration of variable and normal function at the top level).

// IQ: does TDZ create via var?

// no, TDZ is specific to variables declared with let and const, it doesn't apply to variable declared via var.

console.log(y);
var y = 10;
/***
 * var y = undefined;
 * console.log(y);
 * y=10;
 */

/**
 *   What is shadowing in JS?
 * 
 *     -> Variable Shadowing occurs when a variable is declared within a certain scope 
 *         has the same name as a variable decalared in the outer scope.
 */

let x = 10;

function shadowExamaple() {
    let x = 30; // This varibale x shadows the outer x within the function scope 
    console.log(x); //30
}

shadowExamaple();
console.log(x); //10


// Example-1

let fruits = 'apple';
console.log(fruits);//apple

{
    //console.log(fruits); // Ref error
    let fruits;

    console.log(fruits); // undefined

    fruits = 'orange';

    {
        console.log(fruits);//orange
    }
    console.log(fruits);//orange
}

console.log(fruits);// apple


/***
 *  var vs let vs const:
 *                       var                  let                               const
 *   scope:          functional/local        block                               block
 *   hoisting:         yes                    NO                                 NO
 *   re-declaration:    yes                depends upon the env(browser/node)    NO
 *   re-assignment:    yes                  yes                                  NO
 * 
 * 
 *   As a best practice: Please use let and const and also take care about the TDZ.
 */


