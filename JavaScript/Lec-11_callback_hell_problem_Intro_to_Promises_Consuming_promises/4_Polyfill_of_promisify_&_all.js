/**
 *   Write the polyfill of promise APIs or can create your own custom Promise APIs.
 */

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejeceted';

function CustomPromise(exectorFn) {

    let state = 'pending';
    let value = undefined;

    const scbArr = [];
    const fcbArr = [];
    const finallyArr = [];

    const resolve = (val) => {
       if(state !== PENDING) return;
       state = RESOLVED;
       value = val;
       scbArr.forEach((scb)=>{
         scb(value);
       })
    }

    const reject = (err) => {
        if(state !== PENDING) return;
        state = REJECTED;
        value = err;
        fcbArr.forEach((fcb)=>{
            fcb(value);
        })
    }

    this.then = function(cb){
     if(state === RESOLVED) {
        cb(value);
     } else {
        scbArr.push(cb);
     }

     return this;

    }

    this.catch = function(cb) {
        if(state === REJECTED) {
            cb(value);
         } else {
            fcbArr.push(cb);
         }
         return this;
    }

    this.finally = function(cb) { // Please do it this as HW

    }

    exectorFn(resolve, reject);
}

const promise = new CustomPromise((resolve, reject)=>{
    setTimeout(()=>{
        // const data = {name: 'Ashwani Rajput', designation: 'Engineering Manager'};
        const data = null;
        if(data) {
            resolve(data);
        } else {
            reject(new Error("Data can not be fetched!!!"))
        }
    }, 1000);
});

promise.then((res)=>{ // if you want to chaining what shoudl you do? please correct the code accordingly.
    console.log(res);
});

promise.catch((err)=> {
    console.log(err);
});



