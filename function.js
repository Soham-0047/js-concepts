//higher order functions with closures
function HigherOrderClosure(param1){
    console.log("Higher Order Function");
    return function innerunction(param2) {
        console.log("Inner Function");
        return param1 + param2;
    }
}
const higherVar = HigherOrderClosure(23);
console.log(higherVar(23));

//creating object

const newObject = {
    productName: "Laptop",
    productId: 32123,
    calculateWeight : () => newObject.productId+678,
}

//there are diff notations to acess the object properties
console.log(newObject["productName"]);
console.log(newObject.calculateWeight())

//object manupulation
newObject.location = "India";
console.log(newObject);

//how the objec literals are defined
const newBook = {
    title: "JS",
    //create function inside object
    getTitle: () => `${this.title}` + "New Book"
}
console.log(newBook, newBook.getTitle());

//create object with specific prototype
const objectProperty = {
    authname() {
        console.log(`${this.age} this is age`);
    },
    getname(){
        console.log(`${this.quality} this is quality checks`);
    }
}

const createObjectWithSpecificPrototype = Object.create(objectProperty);
createObjectWithSpecificPrototype.age = 34;
createObjectWithSpecificPrototype.quality = "good";
createObjectWithSpecificPrototype.authname();
createObjectWithSpecificPrototype.getname();

//construction function
function constructorFunction(param1,parma2,param3){
    this.param1 = param1;
    this.param2 = parma2;
    this.parma3 = param3;

}