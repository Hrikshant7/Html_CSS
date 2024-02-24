const { runMlalgo } = require("./lib");
console.log("Before");
let amount = 100;
let priceofOne = 20;

const cb = () => {
  amount = amount - priceofOne;
  console.log("Amount: ", amount); // Rs 80
};

runMlalgo(cb);

console.log("After");
