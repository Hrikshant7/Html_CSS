/**
 *   Usecases for using setInterval():
 *       1. re-send OTP.
 *       2. Campaigning for the big day sales like (new year, christmas, Deepawali....)
 * 
 *    setInterval():
 * 
 *        - Its a part of web api/browser api, not a core part of JS.
 *        - repeatedly calls the cb function at a specified interval.
 *        - will return timerId.
 *        - syntax: setInterval(callback function, delay, param1, parma2, ... paramN);
 * 
 *    clearInterval():
 * 
 *        - Its a part of web api/browser api, not a core part of JS.
 *        - to stop the callback functions repeatedly.
 *        - clearInterval(timerId)
 * 
 */

console.log('Before');

const cb = () => {
    console.log('I am callback function');
}

const timerId = setInterval(cb, 1000);
console.log(timerId);

function cancelInterval() {
    console.log('cancelling the timer');
    clearInterval(timerId);
}

setTimeout(cancelInterval, 5000);

console.log('After');