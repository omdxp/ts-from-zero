interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface AnotherInterface {}

interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 23;
  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = "Max";
user1.greet("Hi there - I am");
console.log(user1);
