/**
 *   Common JS memory leak problems and How to avoid them?
 * 
 *     1. Global variables:
 *   
 *          - It may be polluted (modified by functions).
 *          - Try to avoid using global variables and use under 'use strict';
 *          - use let and const instead of var.
 * 
 *     2. closures and scope:
 * 
 *           use proper scope and closures to clean the data part.
 * 
 * 
 *           const fetchingData = () => {
 *               
 *              const data = fetch(https://dev.exmpale.com/products/1);
 * 
 *              some rendering logic and you are consuming the data;
 *              
 *              data = null;
 *            }
 * 
 *           const fn = () => {
 * 
 * 
 *           }
 * 
 *     3. Use the modern JS practices:
 *    
 *        - let and const instead of var
 *        - use arrow function expression.
 *        - use 'use strict'.
 *        - use export and import (creating and using the modules) -> utils
 *        - proper scoping - use class in case OOPS but if using FP (use IIFE)
 * 
 *          const PaymentModule = (()=>{
 *              decalre your private variables
 *              decalare you all private methods
 *              return {
 *                init,
 *                abc,
 *              }
 *           })();
 * 
 * 
 *      4. Manage your timers or intervals, when you are dealing setTimeout() and setInterval();
 * 
 *         const timerId = setInterval(()=>{
 *            // logic
 *         }, 1000);
 * 
 *         clearInterval(timerId);
 * 
 *        const timerId = setTimeout(()=>{
 *            // logic
 *         }, 1000);
 * 
 *        clearTimeout(timerId);
 * 
 *      5. DOM API leak problems:
 * 
 *         const btn = document.getElementById('btn');
 *         btn.addEventListener('click', ()=>{
 *           // logic
 *         })
 * 
 *        To avoid the DOM API leak problems:
 *         - Use removeEventListener('click', callback fn name);
 *         - use stopPropagation();
 *      6. Avoiding forgotten Promises:
 *          const promise = new Promise((resolve, reject)=>{
 *               const { data, error } =  fetch(url);
 * 
 *               if(data){
 *                  resolve(data);
 *               } else{
 *                  reject(error);
 *               }
 *          }); 
 * 
 *          promise.then(()=>{
 * 
 *            const res = {...data}
 * 
 *            res = null;
 *   
 *          }).catch(()=>{
 * 
 *             // error handling
 *          });
 */