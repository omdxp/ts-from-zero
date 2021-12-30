interface Named {
  readonly name: string;
}

interface AnotherInterface {}

interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 23;
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  constructor(name: string) {
    this.name = name;
  }
}

let user1: Greetable;

user1 = new Person("Omar");
// user1.name = "Max";
user1.greet("Hi there - I am");
console.log(user1);
