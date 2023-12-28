const promise1 = Promise.reject("Some error");

promise1.then(null, (err) => {
  console.log("90", err);  // 90 some error
  return 10;
}).then((err) => {
    console.log("92", err); // 92 10
}).then((err)=> {
    console.log("93", err); // 93 undefined
});

/***
 * o/p:
 * 90 some error
 * 92 10
 * 93 undefined
 * 
 */