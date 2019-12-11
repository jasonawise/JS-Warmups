// Take an array of names and add a last name to them
const firstNames = ["Jason", "Jack", "Terry", "Lester"];

const numbers = [1, 2, 3, 4, 5];

// Use an arrow Function to map over the values in first name and add wise to them
// Arrow functions use implicit returns -- with these types of callback functions where
// we just return something immediately we can do that in one line -- therefore there is no
// need for the return keyword
const fullNames = firstNames.map(name => `${name} Wise`);

console.log(fullNames);

// Take a string and split it by the characters 
const string = "Jason"
const splitString = string.split("");

console.log(splitString);

// Console log each first name on a seperate line
firstNames.map(name => console.log(name))

// Console log each first name on a seperate line again...
firstNames.map(name => console.log(name));

// Console log each first name on a seperate line again...
firstNames.map(name => console.log(name));

// Sum the numbers array in a for loop
let sum = 0;
for ( i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`The Sum of the Array is ${sum}`);


// Find the max of numbers array

// find the min of the numbers array

// find the average of the numbers array

// show only even numbers

// show only odd numbers

// first odd number

// first even number