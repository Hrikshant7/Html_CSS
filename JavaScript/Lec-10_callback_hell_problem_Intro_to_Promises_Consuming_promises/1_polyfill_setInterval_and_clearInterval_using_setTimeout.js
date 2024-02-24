/**
 *  Write the polyfill of setInterval() and clearInterval() using setTimeout().
 * 
 *   setInterval(callback, delay)
 * 
 */

const mySetInterval = (cb, delay) => {
    // to stop timer
    // let flag = true;// call by value,which won't work, so i need call by reference -> via object
    let obj = {
        flag: true
    }

    const myfn = () => {
        if(obj.flag === true) {
            cb();
            setTimeout(myfn, delay);
        }
    }
    
    setTimeout(myfn, delay);
    return obj;
}

const myClearInterval = (obj) => {
    obj.flag = false;
}

const fn = () => {
    console.log("I will be called after every interval");
}

// let timerId = mySetInterval(fn, 1000);

let obj = mySetInterval(fn, 1000);

const stopTimer = () => {
    console.log("Cancelled the timer");
    myClearInterval(obj);
}

setTimeout(stopTimer, 5000);

