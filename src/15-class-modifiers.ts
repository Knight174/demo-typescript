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
