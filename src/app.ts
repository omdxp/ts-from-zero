import "reflect-metadata";

import { Product } from "./product.model";
import { plainToInstance } from "class-transformer";

const products = [
  { title: "A Book", price: 10 },
  { title: "A Car", price: 100 },
  { title: "A House", price: 1000 },
];

// const p1 = new Product("Book", 12.99);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInfo());
}
