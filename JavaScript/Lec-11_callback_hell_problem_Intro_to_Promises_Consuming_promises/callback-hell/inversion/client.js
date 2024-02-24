const { runMlalgo, promiseRunMAlgo } = require("./lib");
console.log("Before");
let amount = 100;
let priceofOne = 20;

const cb = () => {
  amount = amount - priceofOne;
  console.log("Amount: ", amount); // Rs 80
};

//runMlalgo(cb);

const promise = promiseRunMAlgo();

promise.then(()=>{
  cb();
}).catch((err)=>{
   throw err;
})

console.log("After");
