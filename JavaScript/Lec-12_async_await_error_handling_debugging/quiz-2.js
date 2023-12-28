function resolveAfterNSeconds(n, x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, n);
  });
}

(function () {
  let a = resolveAfterNSeconds(1000, 1);
  a.then(async function (x) {// x=1, 1sec
    let y = await resolveAfterNSeconds(2000, 2); // y=2 , 2secs
    let z = await resolveAfterNSeconds(1000, 3); // z = 3, 1sec
    let p = resolveAfterNSeconds(2000, 4); // max 2secs => max time will be considered 2secs
    let q = resolveAfterNSeconds(1000, 5);// min 1sec
    // Output, total time
    console.log(x + y + z + await p + await q);  // 1+2+3+4+5 = 15 
  });
})();


/***
 *   15 total time will be taken to print the value 15 as 6secs
 * 
 */