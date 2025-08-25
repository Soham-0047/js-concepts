// Where you can access the variable - Scope
//It's directly involved with lexical environment
// b lexically inside e
// and is inside global scope
// points to lexical environment of global
// Chain of lexical environments and parents called scope chain

/*
    lexical created whenever execution context is created

    Lexical environment = Local memory + reference to the lexical environment of local




*/

//Lexical parent of b1()

// function e(){
//   var y=89; 
//    b();
//     function b(){
//         console.log("Inside  e > b");
//         b1(); 
//         function b1(){
//             //Local memory

//             console.log("inside e > b > b1"); 
//             console.log(y); 
//         }

//     }
// }
// var y =90;   
// e();
// console.log(y);