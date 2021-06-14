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