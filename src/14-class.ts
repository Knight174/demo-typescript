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