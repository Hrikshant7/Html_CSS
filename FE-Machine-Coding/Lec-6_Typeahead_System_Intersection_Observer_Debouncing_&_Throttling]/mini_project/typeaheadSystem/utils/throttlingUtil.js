/**
 *  what is throttling?
 * 
 *     -> Throttling is also a technique in web development to limit the rate at which the particular event is going to be triggered.
 * 
 *     -> use cases: 
 *      1. Rapid button clicks.
 *      2. mousemove events.
 *      3. Limiting the scroll event trigger.
 *    
 */

export const throttle = (cb, delay) => {
   let lastExecutionTime = 0;

   return function(...args) {
       const currentTime = Date.now();

       const elapsed = currentTime - lastExecutionTime;

       if(elapsed >= delay) {
        cb.apply(this, args);
        lastExecutionTime = currentTime;
       }
   }
}