//spread operator and destructuring
/*
ar =[4,7,5,33,89]

function dr(a,b,c){
    return a+b+c
}
*/

// let a = dr(...ar)
// let b =[3,7,3,...ar,10]
// let a1 =[...ar]  //make copy of array
// console.log(b)
// console.log(a)
// console.log(a1)

// let ar2 =[70,80,90]
// let a2 =[...ar2,...ar]
// console.log(a2)      //concatinate two array

//making a object

/*let obj ={
    name1:"soham",
    school:"AHS",
    roll:"12000220047"
}*/

// let obj1 ={}
// obj1.name = obj.name;
//Another method using spread operator

// let obj1 ={...obj,name:"ramesh",roll:"12000564"}
// console.log(obj)
// console.log(obj1)


// let{name1,school,roll} = obj;  //object destructuring
// console.log(name1,school,roll);



//Asynchronous nature of javascript

// console.log("hey bro")
// setTimeout(()=>{
//     console.log("Inside setimeout function");
// },1000);
// console.log("good morning")


//call back and promises

// let fs = require("fs");  //file system module for reading file in node jsl

// fs.readFile("file.txt","utf-8",(err,data)=>{
// console.log(err,data);
// })
// console.log("last line")

//promises for call back hell

// let fs = require("fs/promises");
// let f = fs.readFile("file.txt","utf-8");
// f.then((data)=>{
//     console.log(data);
// }) 
// console.log("After promises")

//Asyn Wait

