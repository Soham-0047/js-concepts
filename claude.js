const isLogical = null;
console.log(isLogical ?? "false");
//modern loops in javascript
const items = ["chcikcen","curry"];
//for loops in array
for (let newitem of items) {
    newitem = newitem + "tyr";
    console.log(newitem);
}
//for loopa in  objects

const basicObject = {
    number: 23,
    country: "India"
}
for(const newKey in basicObject) {
    console.log(newKey);
}

//creatng object with key-value pairs

const expensiveItems = {
    "item1": 234,
    "item2": 96,
    "item3": 89
}

//first check convert object to arr
const convertedArray = Object.entries(expensiveItems);
const filteredArray = convertedArray.filter(([_,valuePrice]) => valuePrice<100)
const transformedObject = filteredArray.map(([productName,price]) => ({productName,price}));

console.log(convertedArray,"\n",filteredArray, "\n",transformedObject);
