"use strict";
// 函数类型
Object.defineProperty(exports, "__esModule", { value: true });
function func1(a, b) {
    if (b === void 0) { b = 10; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return 'func1';
}
func1(1, 2);
func1(1);
// func1(1, 2, 3); 
// 在 b 后面加上?，b 变成可选参数
function func2(a, b) {
    return 'func2';
}
func2(1, 2);
func2(1);
// =====================
// func3 的形参类型限制 + 返回值的类型限制
var func3 = function (a, b) {
    return 'func3';
};
//# sourceMappingURL=8-function-type.js.map