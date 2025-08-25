//Block define by {}
//Block also known as compound statement
// combine multiple statements into group

// {
//     let a =56;
//     console.log(a);
// }
// if(true){
//     console.log(false); //Block


//shadowing javascript
//when a  variable declared in local scope have same name as a variable declared in outer scope

// const h = 75;
// var f = 89;
// let g = 78;

// {
//   var f = 34;
//   let g = 23;
//   const h = 45;
//   console.log("const",h);
//   console.log("let",g);
//   console.log("var",f);
// }
// console.log("outside the scope");
// console.log("const",h);
// console.log("let",g);
// console.log("var",f);

//we can not use let as var for shadowing that is known as illegal shadowing

//illegal shadow
// let v =23;
// {
//     var v =90;
// }

//legal shadow
var v =34;
{
    let v =78;
}

console.log(v);
//Why
// var is a function scope, functon scope also follow lexical scope
