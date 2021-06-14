// 数组类型
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6]; // 常用
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
sum(1, 2, 3, 4);
//# sourceMappingURL=5-arrays-type.js.map