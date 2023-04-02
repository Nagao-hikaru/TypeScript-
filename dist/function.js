"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResulet(n1) {
    console.log(n1);
}
let aaa;
aaa = add;
printResulet(add(5, 10));
function addAndResult(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndResult(10, 10, (result) => {
    console.log(result);
});
//# sourceMappingURL=function.js.map