const userName = "Omar";
// userName = "Max";
let age = 30;
age = 29;

// let result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// const add = (a: number, b: number = 5) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// printOutput(add(2));

const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name: "Omar",
  age: 23,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((prev, curr) => prev + curr, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { name: firstName, age: ageVal } = person;

console.log(firstName, ageVal);
