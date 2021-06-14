// 类型断言

export {}

const nums = [1, 2, 3, 4, 5];

const res = nums.find(n => n > 2);

// const square = res * res;

const num1 = res as number; // 将res明确看作数字类型

const num2 = <number>res; // JSX中不要使用