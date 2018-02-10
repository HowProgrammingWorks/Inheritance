'use strict';

function Fruit(type) {
  this.type = type;
  this.eat = () => {
    console.log(`You ate ${this.type}`);
  };
}

function Apple(color) {
  Fruit.call(this, 'apple');
  this.color = color;
}

const apple = new Apple();

let value;
for (const name in apple) {
  value = apple[name];
  console.log(`${name} : ${value}`);
}

apple.eat(); // You ate apple
