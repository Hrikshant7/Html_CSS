/**
 *  what is debouncing in JS?
 * 
 *     - Debouncing is a useful technique when you are implementing feature 
 *       like autocomplete in search bar so that you can prevent couple of http requests
 *       while typing inside the search bar.
 * 
 *    - use cases:
 *       1. user typing in search box/bar.
 *       2. window resize.
 *       3. scroll events.
 *       4. prevent multiple button clicks
 *       5. the situations whith frequent, expensive updates.
 */

export const debounce = (cb, delay) => {
    let timeoutId;

    return function(...args) {
        if(timeoutId) {
            console.log('resetting the timers');
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        timeoutId = setTimeout(()=> {
            cb.apply(this, args);
        }, delay);
    }
}

