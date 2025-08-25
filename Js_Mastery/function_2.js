//javascript declaration of blocks
//* let,const are block scope
//* var is function scope

// {
//     let fname = "ISRO"
//     console.log(fname)
// }
// Not possible -> console.log(fname)
// {
//     const fname = "Chandrayaan";
//     console.log(fname);
// }

// {
//     var fname = "Chandrayaan3";
    
// }
// console.log(fname);

/*
* var can be use anywhere inside the function block but const and let limited to a specific block to be mention



function mapp() {
    if(true){
        let fname = "Noton";
        console.log(fname);
    }

    console.log(fname);
}

mapp();*/


//! Default paraters

// function addt(a,b){

//     if(typeof b === "undefined"){
//         b = 0;
//     }

//     return a+b;
// }

// const an= addt(7)
// console.log(an);


//! Rest parameters [...]

// function mfun(a,b,...c){

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// mfun(1,2,3,4,5,6,7);


//! Parameter destructuring

// const person = {
//     fname:"S",
//     lname:"Ty",
// }
// function ob(person){
//     console.log(person.fname);
//     console.log(person.lname);
// }
// ob(person);

// function ob1({fname,lname}){
//     console.log(fname);
//     console.log(lname);
// }
// ob1(person);


//! Callback function

function cal(){
    console.log("the callback function");
    cala();

}

function cala(){
    
    console.log("ABCD");
}
cal();