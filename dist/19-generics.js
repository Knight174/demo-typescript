"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createNumberArray(length, value) {
    var arr = Array(length).fill(value);
    return arr;
}
function createStringArray(length, value) {
    var arr = Array(length).fill(value);
    return arr;
}
function createArray(length, value) {
    var arr = Array(length).fill(value);
    return arr;
}
var res = createNumberArray(3, 100); // [100, 100, 100]
var res2 = createArray(3, '100'); // ['100', '100', '100']
//# sourceMappingURL=19-generics.js.map