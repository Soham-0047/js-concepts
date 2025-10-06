const exampleUser = [
    { id: 1, name: 'Alex', active: true },
  { id: 2, name: 'Sam', active: false },
  { id: 3, name: 'Taylor', active: true }
]

//find method
const find3Id = exampleUser.find((user) => user.id === 3);
console.log(find3Id);

//array reduce method
//reduce method run a reducer function which will go through each array items and resulting a single output value.

//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue));

const arraNumbers = [34,66,23,30,56];

console.log(arraNumbers.reduce((acc,curr) => acc+curr, 0));

const indianPlaces = ["Delhi", "Mumbai", "Kolkata",, "Delhi", "Chennai", "Mumbai", "Delhi", "Kolkata", "Delhi", "Chennai", "Mumbai", "Delhi", "Kolkata", "Delhi",  "Chennai"];

const countPlace = indianPlaces.reduce((acc,curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
},{})

console.log(countPlace);
