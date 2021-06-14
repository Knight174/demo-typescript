"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringify(value) {
    return JSON.stringify(value);
}
stringify(123);
stringify('string');
stringify(true);
var foo = '123';
foo = 123;
// any 类型并不安全
//# sourceMappingURL=9-any-type.js.map