/**
 *   setTimeout():  
 * 
 *     - It's a built-in function provided by browser/web API, not a part of JS.
 *     - sets the timer which will execute the function after a specified period of time.
 *     - syntax: setTimeout(cb fn, delay, param1, param2,...paramN);
 *     - return you the timerId;
 * 
 *  clearTimeout():
 *     - It's a built-in function provided by browser/web API, not a part of JS.
 *     - stops the execution of callback function whatever the timer id is returned from
 *        setTimeout();
 * 
 *     -syntax:
 *       clearTimeout(timerId);
 */


const greetMsg = (name) => {
  console.log(`Welcome, ${name}!`);
}

const timerId = setTimeout(greetMsg, 3000, 'Ashwani Rajput')

console.log(timerId);

clearTimeout(timerId);