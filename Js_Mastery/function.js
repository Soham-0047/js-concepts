//*Let's start with the most important and awited topic that is function

// function s1() {
//   console.log("inside function");
// }
// s1();
//Now for any programming language we believe in don't repeat yourself DRY principle
//So we have to create a funtion which will follow this principles
// function s2(a,b,c){
//     return a+b+c;
// }
// console.log(s2(4.
//     ,null,undefined));


// function jk(num){
//   return num%2===0?0:1
// }
// console.log(jk(8))


//input array and target(number)

// //* Arrow function ->
// const anyfunction = () =>{
//   return "Hey";
// }


// //*Another declare of arrow function

// const another = para => para+2794;

// console.log(another(45));



//! Hoisting
//Only possible for function declaration
//a();
// function a(){
//   console.log(1);
// }

// //? Temporal Dead zone
// // b(); //Not possible
// const b = () =>{
//   console.log(2);
// }

//* Lexical scope

function f1(){
  const var1 = "name";
  function f2(){}

  const f3 = function(){}

  const f4 = () =>{}

  console.log(var1)
}
f1();
 