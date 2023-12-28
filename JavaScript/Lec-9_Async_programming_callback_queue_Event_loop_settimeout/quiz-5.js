console.log("Before");

const cb = () => {
    console.log("Interval called ");
}
const timerId = setInterval(cb, 2000);

const cancelInterval = () => {
    console.log("cancelling the interval timer");
    clearInterval(timerId);
}

setTimeout(cancelInterval, 5000);

console.log("after");