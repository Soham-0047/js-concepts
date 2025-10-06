//Closure: A funciton bind together in lexical environment
//function along with lexcal scope

//USE CASES OF CLOSURES


//Module design pattern
//Currrying in JS
//Functions like once
//memozie
//maintain in async world
//setTimeouts
//Iterators


// function a(){
//  let e =90;

//  function b(){
//     e++;
//     console.log(e);

//  }
//  b();

// }
// a();

// function a1() {
//   let e = 90;

//   function b1() {
//     e++;
//     console.log(e);
//   }

//   return b1;
// }
//* function with it's lexical scope returned

//* var r = a1();
//* console.log(r);



function x1(){

   let a =56;

   function x2(){

      let b =90;

      function x3(){
         let c =87;

         function x4(){
            console.log(a,b,c);
         }
         x4();
      }
      x3();
   }
   x2();
}

x1();

//Fu