var varName = 10;
function b() {
    console.log( varName);// 10
}
function fn() {
    var varName = 20;
    b();
    console.log(varName);// 20
}
fn();

// 10 20