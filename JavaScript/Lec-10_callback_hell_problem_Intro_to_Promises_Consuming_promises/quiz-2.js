// const promise = Promise.reject("Some error");
const promise = Promise.resolve("Data fetched");

promise.then((res) => {
  console.log("90", res);
}).catch((err) => {
  console.log("92", err);// 92 Some error
}); 