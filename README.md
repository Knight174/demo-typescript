# init
```yarn```
# build
```yarn tsc```

# TypeScript 基础

By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.

Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.

## 使用

1. 在根目录中，生成 package 文件，`yarn init --dev`
2. 下载 typescript 依赖，`yarn add typescript --dev`
3. 使用终端指令编译 ts ，`yarn tsc 文件名`
4. 生成 TypeScript 配置文件，`yarn tsc --init` 

* 编译 ts 文件，`yarn tsc`

* 编译中文错误提示的文件，`yarn tsc --locale zh-CN`

## TS 的配置文件

执行 `yarn tsc --init` 会在根目录生成一个配置文件：tsconfig.json

![image-20210507134334208](C:\Users\42530\AppData\Roaming\Typora\typora-user-images\image-20210507134334208.png)

（还可以设置严格模式等等。）



## 模块作用域

为了避免全局命名冲突，需要让 ts 文件变成一个模块文件。（或者放在 IIFE 中。）

```javascript
export {}
```



## 类型

### 原始类型

```typescript
// 原始类型

const a:string = 'foo';

const b:number = 123;

const c:boolean = true; // false

// const d:boolean = null;

const e:void = undefined;

const f:undefined = undefined;

const g:null = null;

const h:symbol = Symbol(); // es2015 新增类型 需要修改配置文件的 target 或 lib

// 标准库就是内置对象所对应的声明

// const error:string = 100;
```

### 对象类型

```typescript
// Object 类型
export {} // 避免作用域变量冲突

// 除了原始类型以外的所有对象类型
const foo: object = function () {} // [] // {}

// 对象的类型限制：对象字面量
const obj: {foo: number, bar: string} = {
  foo: 123,
  bar: 'str',
};
```

### 数组类型

```typescript
// 数组类型

const arr1: Array<number> = [1, 2, 3];

const arr2: number[] = [4, 5, 6]; // 常用

function sum (...args: number[]) {
  return args.reduce((prev, current) => prev + current, 0);
}
sum(1, 2, 3, 4);
```

### 元组类型

```typescript
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
```

### 枚举类型

```typescript
// 枚举类型

export {}

// const PostStatus = {
//   Draft: 0,
//   Unpublished: 1,
//   Published: 2
// }

// enum PostStatus {
//   Draft = 0,
//   Unpublished = 1,
//   Published = 2
// }

// enum PostStatus {
//   Draft = 6,
//   Unpublished, // 7
//   Published // 8
// }

// 字符串枚举
// enum PostStatus {
//   Draft = "aaa",
//   Unpublished = "bbb", 
//   Published = "ccc"
// }

// 常量枚举
const enum PostStatus {
  Draft,
  Unpublished,
  Published
}

const post = {
  title: 'this is a title of the current post',
  content: 'Hello TypeScript! This is a typed superset of JavaScript.',
  status: PostStatus.Draft // 0 // 1 // 2
}
```

### 函数类型

```typescript
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
```

### 任意类型

```typescript
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
```

### 隐式类型推断

```typescript
// 隐式类型推断

export {}

let age = 18; // 此处已推断为 number 

// age = '123';

let foo; // any 类型

foo = 123;

foo = 'str';
```

### 类型断言

```typescript
// 类型断言

export {}

const nums = [1, 2, 3, 4, 5];

const res = nums.find(n => n > 2);

// const square = res * res;

const num1 = res as number; // 将 res 明确看作数字类型

const num2 = <number>res; // JSX 中不要使用
```

## 接口

```typescript
// 接口 约束对象结构 必须遵循接口规范 
// 可选成员 只读成员 动态成员
export {}

interface Post {
  title: string
  content: string
  subtitle?: string // 可选成员
  readonly summary: string // 只读成员
}

function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
}

printPost({
  title: 'typescript',
  content: 'a surperset of js',
  summary: 'a description'
})

// --------------------------
// 动态成员
interface Cache {
  [key: string]: string
}

const cache: Cache = {}
cache.foo = '123'
cache.bar = '456'
```

## 类

```typescript
// 类
export {}

class Person {
  // 定义对象实例中属性的类型
  name: string // = 'init name'
  age: number

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHi (msg: string): void {
    console.log(`I am ${this.name}, ${msg}.`)
  }
}
```

### 类中的修饰器

```typescript
// 类 访问修饰符
export {}

class Person {
  // 访问修饰符: public 公有属性
  public name: string // = 'init name'
  // 访问修饰符: private 私有属性 （不能在外部访问）
  private age: number
  // 访问修饰符: protected 被保护的属性 （不能在外部访问，但可以在子类访问）
  protected gender: boolean

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi (msg: string): void {
    console.log(`I am ${this.name}, ${msg}.`)
    console.log(this.age)
  }
}

class Student extends Person {
  // 私有类
  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender) // gender 可以在子类访问到
  }

  static createObj (name: string, age: number) {
    return new Student(name, age);
  }
}

const mike = new Person('mike', 18);
console.log(mike.name)
// console.log(mike.age)
// console.log(mike.gender)

const jack = Student.createObj('jack', 20);
```

### 只读属性

```typescript
// 类的只读类型
export {}

class Person {
  public name: string // = 'init name'
  private age: number
  // 只读属性 readonly
  protected readonly gender: boolean

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi (msg: string): void {
    console.log(`I am ${this.name}, ${msg}.`)
    console.log(this.age)
  }
}

const mike = new Person('mike', 18);
console.log(mike.name)
```

### 类与接口

```typescript
// 类 与 接口
export {}

interface Eat {
  eat (food: string): void
}

interface Run {
  run (distance: number): void
}

class Human implements Eat, Run {
  eat (food: string): void {
    console.log(`吃了${food}`)
  }
  run (distance: number): void {
    console.log(`走了${distance}`)
  }
}

class Animal implements Eat, Run {
  eat (food: string): void {
    console.log(`进食${food}`)
  }
  run (distance: number): void {
    console.log(`爬了${distance}`)
  }
}
```

### 抽象类

```typescript
// 抽象类
export {}

abstract class Animal {
  eat (food: string): void {
    console.log('吃吃吃', food)
  }
  abstract run (distance: number): void
}

class Dog extends Animal {
  run (distance: number): void {
    console.log('走一走', distance)
  }
}

const d = new Dog();
d.eat('cakes');
d.run(100);
```

## 泛型

```typescript
// 泛型 在声明时不去指定声明类型，等到调用时再去传递具体的类型
export {}

function createNumberArray (length: number, value: number):number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}

function createStringArray (length: number, value: string):string[] {
  const arr = Array<string>(length).fill(value)
  return arr
}

// 泛型 
function createArray<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

const res = createNumberArray(3, 100) // [100, 100, 100]
const res2 = createArray<string>(3, '100') // ['100', '100', '100']
```

## 类型声明

```typescript
// 类型声明
import { cameCase } from 'lodash'

// 声明函数类型
declare function cameCase(input: string):string

const res = cameCase('typed javascript')

export {}
```

如果不写类型声明，那么用 `npm i --save-dev @types/lodash` 来下载官方提供的 ts 类型声明文件！

