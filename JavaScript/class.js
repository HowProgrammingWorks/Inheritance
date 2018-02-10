'use strict';

class Fruit {
  constructor(type) {
    this.type = type;
  }
  eat() {
    console.log(`You ate ${this.type}`);
  }
}

class Apple extends Fruit {
  constructor(color) {
    super('apple');
    this.color = color;
  }
}

const apple = new Apple('green');

console.dir(apple);
apple.eat(); // You ate apple
