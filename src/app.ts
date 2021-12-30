interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Omar",
  age: 23,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am");
