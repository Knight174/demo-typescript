// 函数类型

export {}

function func1 (a:number, b:number = 10, ...rest: number[]):string {
  return 'func1'
}
func1(1, 2);
func1(1);
// func1(1, 2, 3); 

// 在 b 后面加上?，b 变成可选参数
function func2 (a:number, b?:number):string {
  return 'func2'
}
func2(1, 2);
func2(1);

// =====================
// func3 的形参类型限制 + 返回值的类型限制
const func3: (a: number, b: number) => string = function (a:number, b:number):string {
  return 'func3'
}