let styles= [ 
    'font-size: 2rem', 
    'font-family: monospace', 
    'background: white', 
    'display: inline-block', 
    'color: black', 
    'padding: 8px 19px', 
    'border: 1px dashed;' 
].join(';') 

console.log("%c Hi Soham 🧑",styles)


/*function multiply(a,b){
    return a*b;
}
console.log(multiply(4,5));
console.log({name:'soham'})
document.write({name:'soham'});
//alert("oy");


let name,country,id;
//console.log(name) //undefined
id = '345';
nam = "soham";
country = "India";
console.log(country);
console.log(id);
console.log(nam,id);


let number  =77;
let nam = "soham";
nam = 88; //loosly bounded
console.log(nam)
number++;
number--;
number++;
console.log(number);


//Implicit type conversion

const nam = "soham";
const school = "AHS";
console.log(nam+' studied at '+school);

const value = 678;
 //const value1= value - nam;
 //console.log(value1);

let number1 = '56';
let number2 = '23';
const add = number1 + number2;
const mul = number1 * number2;
const devi = number1 / number2;
console.log(add) //exception
console.log(mul);
console.log(devi);

//premitive data types
//string
let school = "uiooo";
//boolean
let roll = 12300;
//NULL
const result = null;
//undefined
let hi
//ES6 Syntax
console.log(typeof school);
console.log(typeof false);
console.log(typeof roll);
console.log(typeof hi);
console.log(typeof null);
*/

//Array - [] ,0 index based

// const fruits = ['apple','orange','banna','coconut',null,undefined,45];
// console.log(fruits);
// //assign different value
// fruits[2] ="haaaaaaa";
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

//Function

//declaration of function

// function add(a,b){

//     return a+b;
// }
// console.log(add(4,5));

// const tablewidth = 340; //must assign value when const mention

// function calculate(value){
//     console.log(value*2.54);
// }
// const height =calculate(445);
// const width = calculate(tablewidth);
//  const dimension = [width,height];

//  console.log(dimension);

//objects in javascript
/*
const college ={
    college_name:'B.C Roy',
    student:2340,
    Branch:'IT',
    Exist:true,
    location:['fuljore','durgapur'],
    //ES6 methods
      word(){
        console.log('javascript refresh');
    }

    // word:function(){
    //     console.log('javascript refresh');
    // }
}
console.log(college);
college.word();
*/

//Conditional Statements

// const n1 = 23;
// const n2 = 67;
// if(n1>n2){
//     console.log(n1>n2);
// }
// else{
//     console.log("second option");
// }

//switch statements
// const num =34;
// switch(num){
//     case 1:
//         console.log("one");
//     case 2:
//         console.log('two');
//     case 34:
//         console.log("actual result");
//         break;
//     default:
//         console.log("see you");
// }

/*
//String methods and properties

let student =' Soham Roy';

let result = student.length;
console.log(result);
console.log(student.toLowerCase())
console.log(student.toUpperCase())
console.log(student.charAt(4))
console.log(student.endsWith('y'))
console.log(student.indexOf('h'))//return the index of character

console.log(student.trim())//whitespcae remove
console.log(student.startsWith('Soham')) //start with particular string //true or false
console.log(student.endsWith('oy'))
console.log(student.includes('ha'))
console.log(student.slice(1,8))
*/

//template literals ES6
//Interpolation ${}
//`` backtrick used to do it

// const shop = 'furniture';
// const Location ='Arambagh';
// const fulladdress = shop+' shop located at '+" near soham's home at "+ Location;

// const add = `${shop} shop located at near  ${Location}`;
// console.log(add);

// console.log(fulladdress);

//Array properties and methods
/*
let arr = ['soham','Red',0047,'arambagh'];
console.log(arr.length);
console.log(arr[arr.length-1]);//return last element
let arr1 =['yu','i',"kl"];

const arr2 = arr.concat(arr1);//concatinate two array
console.log(arr2);
console.log(arr2.reverse());//reverse the full array
arr2.shift();
arr2.shift();
arr2.shift();
arr2.shift();
console.log(arr2);
arr2.unshift();
*/

// let arr4 =['nathula','bausha','aryan'];
// let last ="yoo";
// let newarr =[];

// for(let i=0;i<arr4.length;i++){
//     let a = arr4[i].concat(` ${last}`);
//     newarr.push(a);
// }
// console.log(newarr);

//reference and value
// undefined - javascript set this value 
//it's may be variables without value
//missing function arguments


// null - developer set this value

//Truthly and falsy

// let name1 = 'james';
// name1 = 'bond';

// console.log(`${name1} is my freind`);

// const globalnum =56;
// function sub(a,b){

//     return globalnum+a-b;
// }
// console.log(sub(5,6));

//name collisions or modify by mistakes

// let nam = "soham";
//  nam = "go";
// //const nam; //get syntaxerror

// function lo(){
//     console.log(nam);
//     nam = "ty";
// }
// lo();
// if(true){
//     console.log(nam);
//     nam = "it's after ty";
// }

// console.log(`my name is ${nam}`);

// let nam1 = "shiva";

// function lo1(){
//     const nam1 = "hugo the vris";
//     const nam2 = "latex vertex"; //throw an error it's not accessible outside
//     nam3 = "global variable";
// }
// lo1();
// // console.log(nam1);
// // console.log(nam2);
// console.log(nam3);


//Callback functions , higher order functions, functions are first class objects

//Higher order functions - accept another function as an argument or returns another functions as result

//Callback functions - passed to another function as an argument and execute inside this function

// function phd(){
//     console.log("wanna PHD now 👷‍♂️");
// }
// function university(callback1){
//     console.log("college BCREC");
//     callback1();
// }
// function school(){
//     console.log("school AHS");
// }

// //Higher order function

// function fgreet(user,callback,callback1){
    
//     const name1 = "noton";
//     console.log(`Hi ${user},myself ${name1}, welcome in my beloved 🧑`);
    
//     callback(callback1);
// }

// fgreet("shival",university,phd);
// fgreet("christofer",school);





//powerfull array methods
//forEach,map,filter,find,reduce
//Iterator over array , no for loop required

//Accept the callback function as an argument, calls callback aginst each item in array. Reference  item in the callback parameter.


// const array = [78,4,6,3,8];

// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

//forEach does not return new array

const student=[
    {name:"Soham",roll:100400,branch:"IT"},
    {name:"Ramu",roll:100210,branch:"CSE"},
    {name:"John",roll:690,branch:"EE"},
    {name:"Loream",roll:800,branch:"ME"}
];

// function showstudent(par1){
//     console.log(par1);
//     console.log(par1.name.toUpperCase());
//     console.log(par1.roll);
//     console.log(par1.branch);
// }

// //student.forEach(showstudent);

//             //OR//

// student.forEach(function(item){
//     console.log(item.name.toUpperCase());
//     console.log(item.roll.toPrecision());
// })


//map return a new array and does not change the size of new array
//use values of orginal array when making new one 
console.log("hello")
const d = new Date();
const l = d.getUTCMonth();
console.log(d)
console.log(l)

const student1=[
    {name:"Soham",roll:100400,branch:"IT"},
    {name:"Ramu",roll:100210,branch:"CSE"},
    {name:"John",roll:690,branch:"EE"},
    {name:"Loream",roll:800,branch:"ME"}
];

//Itrate over each elements in student1 array

const ages = student1.map(function(po){
    console.log(po)
    return po.branch
})
//It prints at time
console.log(ages);

//Let's modify this

const new1 = student1.map(function(po){
    return{
        fname:po.name.toUpperCase(),
        rroll:po.roll,
    }
})
console.log(new1);


const name2 = student1.map((rt)=>{

    return `<h2>${rt.name}</h2>`

})

document.body.innerHTML = name2.join('');
// console.log(tr)
console.log(name2)



//Filter
//return a new array base on condition
const pedis = [
    {man:'lorem',age:30,position:'Developer'},
    {man:'Yuseki',age:20,position:'CEO'},
    {man:'kalter',age:25,position:'Jr. Assistant'},
    {man:'dropent',age:19,position:'Student'},
    {man:'abrrev',age:27,position:'Govt Officer 😃'}    
]

const youngpedis = pedis.filter((pi)=>{

    // return pi.age <=25;
    return pi.man ==="lorem"
})

console.log(youngpedis)




//Find
//returns single instanse and in this case object
//return first match , if no match then return undefined
//For getting unique value it's great

console.log("find")

const person4 = pedis.find(function(p){
    return  p.age === 27
})
console.log(person4.position)


//Reduce
//iterates to a single value number, array, object

const people = [
    {name:"lorem",age:22,subject:"Math"},
    {name:"Soham",age:39,subject:"Data Science"},
    {name:"Sonu",age:32,subject:"Computer Science"},
    {name:"Koltern",age:69,subject:"AI"},
    {name:"Poretm",age:58,subject:"EE"}

]

//1 parameter ('acc') - total of all calculations
//2 parameter ('curr') - current iteration/value 

//Must must must return inside from the function or reduce

// const lum = people.reduce(function(acc,curritem){

//     console.log(`total is ${acc}`)
//     console.log(`Current age is ${curritem.age}`)

//     acc+= curritem.age
    
//     return acc;


// },0)

// console.log(`👉Total sum is ${lum}`)



//Math Objects

// const num2 = 90.78

// const res2 = Math.exp(num2)

// console.log(res2)


//DATE

//Need a months reference because by default javascript array start with 0 based indexing

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]


// const date = new Date();
// const month  = date.getMonth()
// console.log(`Current month ${months[month]}`)
// const day = date.getDay()

// console.log(`Current day ${days[day]}`)

// // console.log(date.getHours())
// const fullsentence =`${days[day]}, ${date.getDate()} ${months[month]}, ${date.getFullYear()}`
// document.body.innerHTML = fullsentence;


