let a = true;

console.log("Before");

setTimeout(() => {
    a = false;
    console.log("I broke the while loop");
}, 1000);

console.log("After");

while(a){ }

/**
 *  Before
 *  After
 *  it will go in infinite loop(hang)
 */