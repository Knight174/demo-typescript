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