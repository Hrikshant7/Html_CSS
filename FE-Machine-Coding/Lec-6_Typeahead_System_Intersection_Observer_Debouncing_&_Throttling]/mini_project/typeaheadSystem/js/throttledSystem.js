import { throttle } from "../utils/throttlingUtil.js";

const throttledScroll = throttle(()=>{
    console.log('scroll is triggering!!');
}, 500);



// window.addEventListener('scroll', throttledScroll);

window.addEventListener('scroll', throttledScroll);

/**
 * what is the difference b/w the debouncing and throttling?
 * 
 * 
 */