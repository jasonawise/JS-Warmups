// Take an array of names and add a last name to them
const firstNames = ["Jason", "Jack", "Terry", "Lester"];

const numbers = [1, 2, 3, 4, 5];

const mixedArray = [1, 'a', 'b', 2];

const peopleObjArray = [
    {
        name: 'Jason',
        age: 36
    },
    {
        name: 'Anita',
        age: 31
    },
    {
        name: 'Jack',
        age: 75
    },
    {
        name: 'LilyAnn',
        age: 7
    },
    {
        name: 'CoraBeth',
        age: 4
    }
]

// map over peopleObjArray and console.log results
peopleObjArray.map((person) => {
  // eslint-disable-next-line no-console
  return console.log(`${person.name} is ${person.age} old!`)
})

// craete new obj without mutating the old one
const newPersonObject = Object.assign({}, peopleObjArray)
console.log(`new object`, newPersonObject)
console.log('old object', peopleObjArray)

// ^ this is actually not correct - I created a new object but what I really wanted to craete was a new array of objects
