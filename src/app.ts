const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Omar",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], // array of numbers and strings
};

// person.role.push("admin"); // add new element to the array
// person.role[1] = 10; // change the value of the second element

// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby in person.hobbies) {
  console.log(hobby.toUpperCase());
}
