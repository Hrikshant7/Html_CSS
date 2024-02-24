/**
 *   What is module in JS and how to use it?
 * 
 *    -> A module in JS is a self-contained and reusable piece of code 
 *       that encapsulates variables, functions and classes.
 *    -> it helps to organise and manage your code easily.
 * 
 * 
 *   How to use it?
 * 
 *     In ES6, JS gave "import" and "export" keywords -> that controls what parts of a module
 *     are accessible from the other modules.
 */

import { add as addition } from './utils/mathUtil.js';

import Calculator from './utils/Calculator.js';

console.log(addition(2,5));

const calc = new Calculator();

const sub = calc.subtract;
console.log(sub(20,30));

console.log(calc.add(90,80));