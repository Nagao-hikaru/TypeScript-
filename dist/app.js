"use strict";
var addNow = function (a, b) {
    if (b === void 0) { b = 22; }
    return a + b;
};
console.log(addNow(1, 2));
var hobbies = ['sports', 'cooking'];
hobbies.push.apply(hobbies, hobbies);
// スプレッド演算子
console.log(hobbies);
var uu = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (result, value) {
        return result + value;
    }, 0);
};
console.log(uu(1, 2, 3, 4));
//# sourceMappingURL=app.js.map