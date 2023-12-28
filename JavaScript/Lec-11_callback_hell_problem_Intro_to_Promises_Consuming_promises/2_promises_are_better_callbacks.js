/**
 * 
 *  Why promises are better than the callbacks?
 * 
 *    1. Promise can either resolve or reject once in it's lifetime.
 *    2. callbacks of promises goes into a separate queue known as microtask queue and 
 *       this queue has the highest priority than the callback queue.
 * 
 *  What is microtask queue?
 * 
 *   -> a component of the javascript event loop.
 *   -> responsible for handling the microtasks, these are those tasks that have the highest priority than the regular tasks.
 *   -> Promise callbacks which are registered with then(), catch() and finally()
 * 
 *   browser queues and what are the priorities among all the queue?
 * 
 *    ES19(2020) -> queueMicrotask(); -> if you don't want to use promises and the consumpion of promises and 
 *    still you want to invoke a callback function than the callback quene (async callback fn), then you can use
 *    queueMicrotask() -> why? if you want the highest priority queue than the callback queue.
 *  
 *   what are the priorities amonth queue?
 * 
 *    sync code > microtask queue(promises and queueMicrotask() method) > callback queue ~= request animation frame queue.
 * 
 */

console.log("Before");
const fn = () => {
    console.log("Hey i am fn");
}
const fn1 = () => {
    console.log("Hey i am fn1");
}

setTimeout(()=>{
  fn();
}, 0);
// const promise = new Promise((resolve, reject)=>{
//     resolve();
// });
// promise.then(()=>{
//     fn1();
// });

queueMicrotask(()=>{
    fn1();
});

requestAnimationFrame(()=>{
    console.log('Request animation frame is going to invoke');
});

console.log("After");