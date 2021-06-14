// 元组类型 明确元素数量和类型的数组
export {}

const tuple: [number, string] = [1, 'str'];

// const age:number = tuple[0];
// const name = tuple[1];

const [age, name] = tuple;

// ----------------
Object.entries({
  foo: 123,
  bar: 456
})