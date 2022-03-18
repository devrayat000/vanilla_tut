class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(this.name + " is eating");
  }

  details() {
    console.log(`Animal name is ${this.name} and age is ${this.age}`);
  }
}

const cat = new Animal("Tom", 2);
console.log(cat.name);
cat.name = "Jerry";
console.log(cat.age);
cat.eat();
cat.details();

class Mammal extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  walk() {
    console.log(this.name + " is walking");
  }
}

const dog = new Mammal("Bull", 3, "hound");
console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);

dog.walk();
dog.eat();
