// Object 类型

export {} // 避免作用域变量冲突

// 除了原始类型以外的所有对象类型
const foo: object = function () {} // [] // {}

// 对象的类型限制：对象字面量
const obj: {foo: number, bar: string} = {
  foo: 123,
  bar: 'str',
};