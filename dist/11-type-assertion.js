"use strict";
// 类型断言
Object.defineProperty(exports, "__esModule", { value: true });
var nums = [1, 2, 3, 4, 5];
var res = nums.find(function (n) { return n > 2; });
// const square = res * res;
var num1 = res; // 将res明确看作数字类型
var num2 = res; // JSX中不要使用
//# sourceMappingURL=11-type-assertion.js.map