// Take an array of names and add a last name to them
const firstNames = ["Jason", "Jack", "Terry", "Lester"];

// Use an arrow Function to map over the values in first name and add wise to them
// Arrow functions use implicit returns -- with these types of callback functions where
// we just return something immediately we can do that in one line -- therefore there is no
// need for the return keyword
const fullNames = firstNames.map(name => `${name} Wise`);

console.log(fullNames);