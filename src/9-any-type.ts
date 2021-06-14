// 任意类型
export {}

function stringify (value: any) {
  return JSON.stringify(value);
}

stringify(123);
stringify('string');
stringify(true);

let foo: any = '123';
foo = 123;

// any 类型并不安全