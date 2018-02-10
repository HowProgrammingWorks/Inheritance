'use strict';

function Fruit(type) {
  this.type = type;
  this.eat = () => {
    console.log(`You ate ${this.type}`);
  };
}

function Apple(color) {
  this.color = color;
}
Apple.prototype = new Fruit('apple');

const apple = new Apple('green');

let value;
for (const name in apple) {
  value = apple[name];
  console.log(`${name} : ${value}`);
}

apple.eat(); // You ate apple
