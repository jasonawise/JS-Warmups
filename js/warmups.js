// Take an array of names and add a last name to them
const firstNames = ["Jason", "Jack", "Terry", "Lester"];

const numbers = [1, 2, 3, 4, 5];

const mixedArray = [1, 'a', 'b', 2];

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

// Print the numbers array
numbers.map(num => console.log(num));

// Find the max of the numbers array
console.log(`The max number in the array is ${Math.max(...numbers)}`);

// Remove the non numbers from the mixedArray

// need to get the length of the array before splice
const arrayLength = mixedArray.length;

for(let i=0; arrayLength > i; i++) {
    if(isNaN(mixedArray[i])) {
        mixedArray.splice(i, 1);
        console.log(`mixed array after splice: ${mixedArray}`);
    }
}

console.log(mixedArray);


// Remove the numbers from the mixedArray

// find the min of the numbers array
const minOfArray = Math.min(...numbers);
console.log(`The min of hte numbers in the array is ${minOfArray}`);

// find the average of the numbers array
    // get the sum of the array, then divide by length of array
let sumOfArray = 0;
const numbersArrayLength = numbers.length;

for ( i = 0; i < numbers.length; i++) {
    sumOfArray += numbers[i];
}

const averageOfArray = sumOfArray / numbersArrayLength

console.log(`The average of the numbers array is: ${averageOfArray}`)

// show only even numbers

// show only odd numbers

// first odd number

// first even number