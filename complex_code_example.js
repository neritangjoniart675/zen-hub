/*
   filename: complex_code_example.js

   This code is a complex and sophisticated example that showcases various JavaScript concepts and best practices.
   It combines object-oriented programming, functional programming, and asynchronous operations.
   It also provides an example of a simple web server using the Node.js `http` module.

   Please note that this code is an example, and it may not have any practical use on its own.
   It's meant to demonstrate advanced JavaScript techniques and concepts.
*/

const http = require('http');

// Define a class for a Vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

// Create a few vehicles
const vehicle1 = new Vehicle('Toyota', 'Camry', 2021);
const vehicle2 = new Vehicle('Tesla', 'Model S', 2022);

console.log(vehicle1.getDetails());
console.log(vehicle2.getDetails());

// Define a higher-order function that calculates the sum of squares of a given array
function sumOfSquares(numbers) {
  return numbers.reduce((acc, curr) => acc + curr ** 2, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers));

// Define a function that returns a promise which resolves after a given delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Use async/await to perform asynchronous operations sequentially
async function performOperations() {
  console.log('Starting operations...');
  
  await delay(2000);
  console.log('Operation 1 completed');
  
  await delay(1000);
  console.log('Operation 2 completed');
  
  await delay(3000);
  console.log('Operation 3 completed');
  
  console.log('All operations completed');
}

performOperations();

// Create a simple web server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world! This is a web server response.');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});