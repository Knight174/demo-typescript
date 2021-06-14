// 类的只读类型
export {}

class Person {
  public name: string // = 'init name'
  private age: number
  // 只读属性
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