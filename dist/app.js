"use strict";
var addNow = function (a, b) {
    if (b === void 0) { b = 22; }
    return a + b;
};
console.log(addNow(1, 2));
var hobbies = ['sports', 'cooking'];
hobbies.push.apply(hobbies, hobbies);
console.log(hobbies);
//# sourceMappingURL=app.js.map